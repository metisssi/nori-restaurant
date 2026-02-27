import { useState, useEffect } from "react";
import { Plus, Trash2, Edit3, Save, X, LogOut, Image, UtensilsCrossed, Eye, EyeOff } from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("nori_admin_token") || "");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("menu");

  // Menu state
  const [menuItems, setMenuItems] = useState([]);
  const [menuLoading, setMenuLoading] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null);
  const [newMenu, setNewMenu] = useState({ name_cs: "", name_en: "", description_cs: "", description_en: "", price: "", imageUrl: "", order: 0 });
  const [showAddMenu, setShowAddMenu] = useState(false);

  // Gallery state
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [newGallery, setNewGallery] = useState({ imageUrl: "", alt: "", order: 0 });
  const [showAddGallery, setShowAddGallery] = useState(false);

  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  // ── AUTH ──
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      localStorage.setItem("nori_admin_token", data.token);
      setToken(data.token);
    } catch (err) {
      setLoginError(err.message || "Chyba přihlášení");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("nori_admin_token");
    setToken("");
  };

  // ── MENU CRUD ──
  const fetchMenu = async () => {
    setMenuLoading(true);
    try {
      const res = await fetch(`${API}/menu`);
      const data = await res.json();
      setMenuItems(data);
    } catch { }
    setMenuLoading(false);
  };

  const addMenuItem = async () => {
    if (!newMenu.name_cs || !newMenu.imageUrl) return alert("Vyplň název (CS) a URL obrázku");
    try {
      const res = await fetch(`${API}/menu`, { method: "POST", headers, body: JSON.stringify(newMenu) });
      if (!res.ok) throw new Error();
      setNewMenu({ name_cs: "", name_en: "", description_cs: "", description_en: "", price: "", imageUrl: "", order: 0 });
      setShowAddMenu(false);
      fetchMenu();
    } catch { alert("Chyba při přidávání"); }
  };

  const saveMenuItem = async (id, data) => {
    try {
      const res = await fetch(`${API}/menu/${id}`, { method: "PUT", headers, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setEditingMenu(null);
      fetchMenu();
    } catch { alert("Chyba při ukládání"); }
  };

  const deleteMenuItem = async (id) => {
    if (!confirm("Opravdu smazat?")) return;
    await fetch(`${API}/menu/${id}`, { method: "DELETE", headers });
    fetchMenu();
  };

  // ── GALLERY CRUD ──
  const fetchGallery = async () => {
    setGalleryLoading(true);
    try {
      const res = await fetch(`${API}/gallery`);
      const data = await res.json();
      setGalleryItems(data);
    } catch { }
    setGalleryLoading(false);
  };

  const addGalleryItem = async () => {
    if (!newGallery.imageUrl) return alert("Vyplň URL obrázku");
    try {
      const res = await fetch(`${API}/gallery`, { method: "POST", headers, body: JSON.stringify(newGallery) });
      if (!res.ok) throw new Error();
      setNewGallery({ imageUrl: "", alt: "", order: 0 });
      setShowAddGallery(false);
      fetchGallery();
    } catch { alert("Chyba při přidávání"); }
  };

  const deleteGalleryItem = async (id) => {
    if (!confirm("Opravdu smazat?")) return;
    await fetch(`${API}/gallery/${id}`, { method: "DELETE", headers });
    fetchGallery();
  };

  useEffect(() => {
    if (token) {
      fetchMenu();
      fetchGallery();
    }
  }, [token]);

  // ── LOGIN SCREEN ──
  if (!token) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/nori_logo_transparent.png" alt="Nori" className="h-24 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
            <p className="text-gray-400 mt-1">Přihlaste se pro správu obsahu</p>
          </div>

          <form onSubmit={handleLogin} className="bg-gradient-to-br from-gray-900 to-red-950/20 border border-red-800/30 rounded-3xl p-8 space-y-4">
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 pr-12"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-3.5 text-gray-400 hover:text-white">
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-500 hover:to-red-600 transition-all">
              Přihlásit se
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── ADMIN PANEL ──
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-red-800/30 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/nori_logo_transparent.png" alt="Nori" className="h-12" />
          <div>
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            <p className="text-gray-400 text-sm">Správa obsahu webu</p>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center space-x-2 px-4 py-2 bg-red-900/40 border border-red-700/40 rounded-xl hover:bg-red-800/50 transition-all text-red-400">
          <LogOut size={16} />
          <span>Odhlásit</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-red-800/30 px-6">
        <button
          onClick={() => setActiveTab("menu")}
          className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all border-b-2 ${activeTab === "menu" ? "border-red-500 text-red-400" : "border-transparent text-gray-400 hover:text-white"}`}
        >
          <UtensilsCrossed size={18} />
          <span>Menu položky</span>
          <span className="bg-red-900/50 text-red-300 text-xs px-2 py-0.5 rounded-full">{menuItems.length}</span>
        </button>
        <button
          onClick={() => setActiveTab("gallery")}
          className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all border-b-2 ${activeTab === "gallery" ? "border-red-500 text-red-400" : "border-transparent text-gray-400 hover:text-white"}`}
        >
          <Image size={18} />
          <span>Galerie</span>
          <span className="bg-red-900/50 text-red-300 text-xs px-2 py-0.5 rounded-full">{galleryItems.length}</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ── MENU TAB ── */}
        {activeTab === "menu" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Menu položky</h2>
              <button
                onClick={() => setShowAddMenu(!showAddMenu)}
                className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl hover:from-red-500 hover:to-red-600 transition-all font-semibold"
              >
                <Plus size={18} />
                <span>Přidat položku</span>
              </button>
            </div>

            {/* Add form */}
            {showAddMenu && (
              <div className="bg-gradient-to-br from-gray-900 to-red-950/10 border border-red-800/30 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-red-400">Nová položka menu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Název (česky) *" value={newMenu.name_cs} onChange={e => setNewMenu({ ...newMenu, name_cs: e.target.value })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="Název (anglicky)" value={newMenu.name_en} onChange={e => setNewMenu({ ...newMenu, name_en: e.target.value })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="Popis (česky)" value={newMenu.description_cs} onChange={e => setNewMenu({ ...newMenu, description_cs: e.target.value })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="Popis (anglicky)" value={newMenu.description_en} onChange={e => setNewMenu({ ...newMenu, description_en: e.target.value })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="Cena (např. 299 Kč)" value={newMenu.price} onChange={e => setNewMenu({ ...newMenu, price: e.target.value })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="Pořadí (číslo)" type="number" value={newMenu.order} onChange={e => setNewMenu({ ...newMenu, order: Number(e.target.value) })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="URL obrázku *" value={newMenu.imageUrl} onChange={e => setNewMenu({ ...newMenu, imageUrl: e.target.value })} className="md:col-span-2 bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                </div>
                {newMenu.imageUrl && (
                  <div className="flex items-center space-x-3">
                    <img src={newMenu.imageUrl} alt="preview" className="h-20 w-20 object-cover rounded-xl border border-red-800/40" onError={e => e.target.style.display = 'none'} />
                    <span className="text-gray-400 text-sm">Náhled obrázku</span>
                  </div>
                )}
                <div className="flex space-x-3">
                  <button onClick={addMenuItem} className="flex items-center space-x-2 px-5 py-2.5 bg-green-700 hover:bg-green-600 rounded-xl transition-all font-semibold">
                    <Save size={16} /><span>Uložit</span>
                  </button>
                  <button onClick={() => setShowAddMenu(false)} className="flex items-center space-x-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all">
                    <X size={16} /><span>Zrušit</span>
                  </button>
                </div>
              </div>
            )}

            {/* Menu items list */}
            {menuLoading ? (
              <div className="text-center py-12 text-gray-400">Načítám...</div>
            ) : menuItems.length === 0 ? (
              <div className="text-center py-12 text-gray-400 border border-red-800/20 rounded-2xl">
                <UtensilsCrossed size={48} className="mx-auto mb-4 opacity-30" />
                <p>Žádné položky menu. Přidej první!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.map(item => (
                  <div key={item._id} className="bg-gradient-to-br from-gray-900 to-red-950/10 border border-red-800/30 rounded-2xl overflow-hidden">
                    {editingMenu === item._id ? (
                      <EditMenuForm item={item} headers={headers} API={API} onSave={saveMenuItem} onCancel={() => setEditingMenu(null)} />
                    ) : (
                      <div className="flex">
                        <img src={item.imageUrl} alt={item.name_cs} className="w-28 h-28 object-cover flex-shrink-0" onError={e => e.target.src = 'https://via.placeholder.com/112?text=No+img'} />
                        <div className="p-4 flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="min-w-0">
                              <h3 className="font-bold text-white truncate">{item.name_cs}</h3>
                              <p className="text-gray-400 text-sm truncate">{item.name_en}</p>
                              <p className="text-gray-500 text-xs mt-1 truncate">{item.description_cs}</p>
                              <span className="inline-block mt-2 px-3 py-1 bg-red-900/40 text-red-300 text-sm font-semibold rounded-full">{item.price}</span>
                            </div>
                            <div className="flex space-x-2 ml-2 flex-shrink-0">
                              <button onClick={() => setEditingMenu(item._id)} className="p-2 bg-blue-900/40 hover:bg-blue-800/60 rounded-lg transition-all text-blue-400">
                                <Edit3 size={14} />
                              </button>
                              <button onClick={() => deleteMenuItem(item._id)} className="p-2 bg-red-900/40 hover:bg-red-800/60 rounded-lg transition-all text-red-400">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── GALLERY TAB ── */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Galerie</h2>
              <button
                onClick={() => setShowAddGallery(!showAddGallery)}
                className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-xl hover:from-red-500 hover:to-red-600 transition-all font-semibold"
              >
                <Plus size={18} />
                <span>Přidat foto</span>
              </button>
            </div>

            {/* Add gallery form */}
            {showAddGallery && (
              <div className="bg-gradient-to-br from-gray-900 to-red-950/10 border border-red-800/30 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-red-400">Nová fotka do galerie</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input placeholder="URL obrázku *" value={newGallery.imageUrl} onChange={e => setNewGallery({ ...newGallery, imageUrl: e.target.value })} className="md:col-span-2 bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="Popis (alt text)" value={newGallery.alt} onChange={e => setNewGallery({ ...newGallery, alt: e.target.value })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                  <input placeholder="Pořadí (číslo)" type="number" value={newGallery.order} onChange={e => setNewGallery({ ...newGallery, order: Number(e.target.value) })} className="bg-black/50 border border-red-800/40 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
                </div>
                {newGallery.imageUrl && (
                  <img src={newGallery.imageUrl} alt="preview" className="h-32 object-cover rounded-xl border border-red-800/40" onError={e => e.target.style.display = 'none'} />
                )}
                <div className="flex space-x-3">
                  <button onClick={addGalleryItem} className="flex items-center space-x-2 px-5 py-2.5 bg-green-700 hover:bg-green-600 rounded-xl transition-all font-semibold">
                    <Save size={16} /><span>Uložit</span>
                  </button>
                  <button onClick={() => setShowAddGallery(false)} className="flex items-center space-x-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all">
                    <X size={16} /><span>Zrušit</span>
                  </button>
                </div>
              </div>
            )}

            {/* Gallery grid */}
            {galleryLoading ? (
              <div className="text-center py-12 text-gray-400">Načítám...</div>
            ) : galleryItems.length === 0 ? (
              <div className="text-center py-12 text-gray-400 border border-red-800/20 rounded-2xl">
                <Image size={48} className="mx-auto mb-4 opacity-30" />
                <p>Žádné fotky v galerii. Přidej první!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryItems.map(item => (
                  <div key={item._id} className="relative group rounded-2xl overflow-hidden border border-red-800/30 aspect-square">
                    <img src={item.imageUrl} alt={item.alt} className="w-full h-full object-cover" onError={e => e.target.src = 'https://via.placeholder.com/300?text=Error'} />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center space-x-3">
                      <button onClick={() => deleteGalleryItem(item._id)} className="p-2.5 bg-red-700 hover:bg-red-600 rounded-xl transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-xs text-gray-300 bg-black/60 px-2 py-1 rounded-lg backdrop-blur-sm truncate block">{item.alt || "Bez popisu"}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Inline edit form component
const EditMenuForm = ({ item, headers, API, onSave, onCancel }) => {
  const [form, setForm] = useState({ ...item });

  return (
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <input value={form.name_cs} onChange={e => setForm({ ...form, name_cs: e.target.value })} placeholder="Název (CS)" className="bg-black/50 border border-red-800/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500" />
        <input value={form.name_en} onChange={e => setForm({ ...form, name_en: e.target.value })} placeholder="Název (EN)" className="bg-black/50 border border-red-800/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500" />
        <input value={form.description_cs} onChange={e => setForm({ ...form, description_cs: e.target.value })} placeholder="Popis (CS)" className="bg-black/50 border border-red-800/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500" />
        <input value={form.description_en} onChange={e => setForm({ ...form, description_en: e.target.value })} placeholder="Popis (EN)" className="bg-black/50 border border-red-800/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500" />
        <input value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="Cena" className="bg-black/50 border border-red-800/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500" />
        <input value={form.order} type="number" onChange={e => setForm({ ...form, order: Number(e.target.value) })} placeholder="Pořadí" className="bg-black/50 border border-red-800/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500" />
        <input value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })} placeholder="URL obrázku" className="col-span-2 bg-black/50 border border-red-800/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500" />
      </div>
      <div className="flex space-x-2">
        <button onClick={() => onSave(item._id, form)} className="flex items-center space-x-1 px-4 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-sm font-semibold transition-all">
          <Save size={14} /><span>Uložit</span>
        </button>
        <button onClick={onCancel} className="flex items-center space-x-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-all">
          <X size={14} /><span>Zrušit</span>
        </button>
      </div>
    </div>
  );
};

export default Admin;