"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { 
  Plus, Monitor, Smartphone, ChevronLeft, Menu, Check, 
  Trash2, GripVertical, Image as ImageIcon, Wand2, X, Upload, Download, Link as LinkIcon, Home, FileText
} from 'lucide-react';

// --- CONFIGURATION ---
const THEMES = [
  { id: 'minimal', name: 'Minimalist', bg: '#FAFAFA', text: '#000000', accent: '#71717A' },
  { id: 'dark', name: 'Stealth Black', bg: '#0A0A0A', text: '#FFFFFF', accent: '#404040' },
  { id: 'clay', name: 'Clay Terra', bg: '#FDF8F3', text: '#432818', accent: '#99582A' },
  { id: 'ocean', name: 'Oceanic', bg: '#E8F6F3', text: '#1B3A4B', accent: '#3A9AD9' },
  { id: 'sunset', name: 'Sunset Glow', bg: '#FFF5F0', text: '#4B2E2E', accent: '#D97706' },
];

const FONTS = [
  { name: 'Sans Serif', class: 'font-sans' },
  { name: 'Serif Elegant', class: 'font-serif' },
  { name: 'Mono Tech', class: 'font-mono' },
  { name: 'Display Bold', class: 'font-display' },
];

export default function ArchitectBuilder() {
  // --- STATE MANAGEMENT ---
  const [pages, setPages] = useState<any[]>([
    { 
      id: 'p-home', 
      name: 'Home', 
      sections: [
        { id: 's1', type: 'Hero', title: 'Aman Shah', content: 'Minimalist Designer & Developer. Creating intentional digital experiences.' },
        { id: 's2', type: 'Projects', title: 'Selected Works', items: [{ id: 'p1', title: 'Project One', desc: 'Case study description...', img: null, url: '#' }] },
      ]
    },
    { 
      id: 'p-about', 
      name: 'About', 
      sections: [
        { id: 's3', type: 'Bio', title: 'My Story', content: 'I build products that bridge the gap between design and technology.' }
      ]
    }
  ]);

  const [activePageId, setActivePageId] = useState('p-home');
  const [logo, setLogo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'pages' | 'content' | 'styles'>('pages');
  const [currentTheme, setCurrentTheme] = useState(THEMES[0]);
  const [currentFont, setCurrentFont] = useState(FONTS[0]);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const activePage = pages.find(p => p.id === activePageId) || pages[0];

  // --- PAGE & SECTION ACTIONS ---
  const addPage = () => {
    const newPage = {
      id: `p-${Date.now()}`,
      name: 'New Page',
      sections: [{ id: `s-${Date.now()}`, type: 'Hero', title: 'New Page', content: 'Content goes here...' }]
    };
    setPages([...pages, newPage]);
    setActivePageId(newPage.id);
  };

  const deletePage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (pages.length > 1) {
      const filtered = pages.filter(p => p.id !== id);
      setPages(filtered);
      if (activePageId === id) setActivePageId(filtered[0].id);
    }
  };

  const updateSections = (newSections: any[]) => {
    setPages(pages.map(p => p.id === activePageId ? { ...p, sections: newSections } : p));
  };

  const addSection = (type: string) => {
    const newId = `s-${Date.now()}`;
    let newSection: any = { id: newId, type, title: `${type} Title`, content: 'Your content...' };
    if (type === 'Projects') newSection.items = [{ id: `i-${Date.now()}`, title: 'Project Title', desc: 'Description...', img: null, url: '#' }];
    if (type === 'Skills' || type === 'Contact') newSection.items = [{ id: `i-${Date.now()}`, value: 'New Entry' }];
    updateSections([...activePage.sections, newSection]);
  };

  const handleProjectImage = (sectionId: string, projectId: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = activePage.sections.map((s: any) => s.id === sectionId ? {
        ...s, items: s.items.map((p: any) => p.id === projectId ? { ...p, img: reader.result } : p)
      } : s);
      updateSections(updated);
    };
    reader.readAsDataURL(file);
  };

  // --- FIXED MULTI-PAGE EXPORT ---
  const exportToHTML = () => {
    const navLinks = pages.map(p => `
      <button onclick="showPage('${p.id}')" class="nav-btn opacity-40 hover:opacity-100 transition-all uppercase tracking-[0.2em] text-[10px] font-black py-2" id="nav-${p.id}">
        ${p.name}
      </button>`).join('');

    const pagesHTML = pages.map(page => `
      <div id="page-${page.id}" class="page-container hidden">
        <div class="space-y-48">
          ${page.sections.map((s:any, i:number) => `
            <section>
              <span class="text-[10px] font-black uppercase tracking-widest opacity-20 block mb-6">// 0${i+1} ${s.type}</span>
              <h2 class="text-6xl md:text-8xl font-black tracking-tighter uppercase italic mb-12 leading-[0.85]">${s.title}</h2>
              ${s.type === 'Projects' ? `
                <div class="space-y-32">
                  ${s.items.map((p:any) => `
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                      <div class="aspect-square bg-zinc-200 rounded-[40px] overflow-hidden">
                        ${p.img ? `<img src="${p.img}" class="w-full h-full object-cover">` : ''}
                      </div>
                      <div>
                        <h3 class="text-4xl font-black uppercase italic tracking-tighter">${p.title}</h3>
                        <p class="text-xl opacity-50 mt-6">${p.desc}</p>
                        <a href="${p.url || '#'}" class="inline-block mt-8 text-[10px] font-black border-b-2 border-current pb-2">VIEW PROJECT</a>
                      </div>
                    </div>`).join('')}
                </div>
              ` : s.items ? `
                <div class="flex flex-wrap gap-x-12 gap-y-6">
                  ${s.items.map((it:any) => `<div class="text-3xl md:text-5xl font-black uppercase italic opacity-30">${it.value}</div>`).join('')}
                </div>
              ` : `<p class="text-2xl md:text-4xl font-medium opacity-50 max-w-4xl">${s.content}</p>`}
            </section>`).join('')}
        </div>
      </div>`).join('');

    const finalHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Architect Portfolio</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { background-color: ${currentTheme.bg}; color: ${currentTheme.text}; transition: background 0.5s ease; }
            .page-container.active { display: block; animation: fadeIn 0.5s ease forwards; }
            .nav-btn.active { opacity: 1; border-bottom: 2px solid currentColor; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          </style>
      </head>
      <body class="${currentFont.class} p-8 md:p-16">
          <nav class="flex justify-between items-center max-w-7xl mx-auto mb-32">
              <div class="font-black italic text-2xl border-4 border-current px-2">${logo ? `<img src="${logo}" class="w-10 h-10 object-cover">` : 'M.'}</div>
              <div class="flex gap-8 md:gap-12">${navLinks}</div>
          </nav>
          <main class="max-w-7xl mx-auto">${pagesHTML}</main>
          <script>
            function showPage(id) {
              document.querySelectorAll('.page-container').forEach(p => p.classList.add('hidden'));
              document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active'));
              document.querySelectorAll('.nav-btn').forEach(l => l.classList.remove('active'));
              
              const targetPage = document.getElementById('page-' + id);
              const targetNav = document.getElementById('nav-' + id);
              
              if(targetPage) {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('active');
                targetNav.classList.add('active');
                window.scrollTo(0, 0);
              }
            }
            showPage('${pages[0].id}');
          </script>
      </body>
      </html>`;

    const blob = new Blob([finalHTML], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'portfolio.html';
    a.click();
  };

  return (
    <div className={`h-screen w-full flex overflow-hidden ${currentFont.class} bg-[#F4F4F5] text-zinc-900`}>
      
      {/* SIDEBAR */}
      <motion.aside animate={{ width: isSidebarOpen ? 400 : 0, opacity: isSidebarOpen ? 1 : 0 }} className="bg-white border-r border-zinc-200 flex flex-col z-50 relative overflow-hidden shadow-2xl">
        <div className="w-[400px] h-full flex flex-col">
          <div className="p-8 border-b border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center rounded-2xl rotate-3 overflow-hidden shadow-lg">
                {logo ? <img src={logo} className="w-full h-full object-cover" /> : <span className="text-white font-black italic text-lg">M.</span>}
              </div>
              <div>
                <h2 className="font-black text-sm uppercase tracking-tighter">Architect</h2>
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Multi-Page v4.5</span>
              </div>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="text-zinc-300 hover:text-black"><ChevronLeft size={20}/></button>
          </div>

          <div className="flex px-8 pt-6 gap-8 border-b border-zinc-50 text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <button onClick={() => setActiveTab('pages')} className={`${activeTab === 'pages' ? 'text-black border-b-2 border-black' : ''} pb-3 transition-all`}>Pages</button>
            <button onClick={() => setActiveTab('content')} className={`${activeTab === 'content' ? 'text-black border-b-2 border-black' : ''} pb-3 transition-all`}>Content</button>
            <button onClick={() => setActiveTab('styles')} className={`${activeTab === 'styles' ? 'text-black border-b-2 border-black' : ''} pb-3 transition-all`}>Styles</button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {activeTab === 'pages' && (
              <div className="space-y-4">
                <button onClick={addPage} className="w-full py-4 border-2 border-dashed border-zinc-100 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase text-zinc-400 hover:border-black hover:text-black transition-all">
                  <Plus size={14}/> Add New Page
                </button>
                {pages.map(page => (
                  <div key={page.id} onClick={() => setActivePageId(page.id)} className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${activePageId === page.id ? 'bg-black text-white border-black shadow-xl scale-[1.02]' : 'bg-zinc-50 border-zinc-100 text-zinc-500 hover:bg-zinc-100'}`}>
                    <div className="flex items-center gap-3">
                      <FileText size={14}/>
                      <input className="bg-transparent border-none p-0 focus:ring-0 font-black text-[10px] uppercase tracking-widest w-24" value={page.name} onChange={(e) => setPages(pages.map(p => p.id === page.id ? {...p, name: e.target.value} : p))} />
                    </div>
                    {pages.length > 1 && <Trash2 size={14} className="opacity-40 hover:text-red-500" onClick={(e) => deletePage(page.id, e)}/>}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-2">
                  {['Hero', 'Projects', 'Skills', 'Contact'].map(type => (
                    <button key={type} onClick={() => addSection(type)} className="p-3 bg-zinc-50 border border-zinc-100 rounded-xl text-[9px] font-black uppercase text-zinc-500 hover:bg-black hover:text-white transition-all">+ {type}</button>
                  ))}
                </div>
                <Reorder.Group axis="y" values={activePage.sections} onReorder={updateSections} className="space-y-4">
                  {activePage.sections.map((section: any) => (
                    <Reorder.Item key={section.id} value={section} className="p-5 bg-white border border-zinc-100 rounded-3xl shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[9px] font-black uppercase opacity-40">{section.type}</span>
                        <button onClick={() => updateSections(activePage.sections.filter((s:any) => s.id !== section.id))}><Trash2 size={14} className="text-zinc-300 hover:text-red-500"/></button>
                      </div>
                      <input className="w-full font-black text-sm uppercase mb-3 bg-transparent border-none p-0 focus:ring-0" value={section.title} onChange={(e) => updateSections(activePage.sections.map((s:any) => s.id === section.id ? {...s, title: e.target.value} : s))} />
                      {section.items ? (
                        <div className="space-y-3">
                          {section.items.map((item: any) => (
                            <div key={item.id} className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 space-y-2">
                              <input className="w-full text-[10px] font-black uppercase bg-transparent border-none p-0 focus:ring-0" value={item.title || item.value} onChange={(e) => updateSections(activePage.sections.map((s:any) => s.id === section.id ? {...s, items: s.items.map((i:any) => i.id === item.id ? {...i, [item.title?'title':'value']: e.target.value} : i)} : s))} />
                              {section.type === 'Projects' && (
                                <div className="flex gap-2">
                                  <label className="p-1.5 bg-white border rounded cursor-pointer hover:bg-zinc-100"><ImageIcon size={10}/><input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && handleProjectImage(section.id, item.id, e.target.files[0])}/></label>
                                  <input placeholder="URL" className="flex-1 text-[9px] bg-white border rounded px-2 focus:ring-0" value={item.url} onChange={(e) => updateSections(activePage.sections.map((s:any) => s.id === section.id ? {...s, items: s.items.map((i:any) => i.id === item.id ? {...i, url: e.target.value} : i)} : s))} />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <textarea className="w-full text-xs text-zinc-500 bg-transparent border-none p-0 focus:ring-0 resize-none" rows={3} value={section.content} onChange={(e) => updateSections(activePage.sections.map((s:any) => s.id === section.id ? {...s, content: e.target.value} : s))} />
                      )}
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </div>
            )}

            {activeTab === 'styles' && (
              <div className="space-y-10">
                <section>
                  <label className="text-[10px] font-black uppercase opacity-40 block mb-4">Color Palette</label>
                  <div className="grid gap-2">
                    {THEMES.map(t => (
                      <button key={t.id} onClick={() => setCurrentTheme(t)} className={`p-4 flex justify-between items-center rounded-2xl border ${currentTheme.id === t.id ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-zinc-500 border-zinc-100 hover:bg-zinc-50'}`}>
                        <span className="text-xs font-bold">{t.name}</span>
                        <div className="flex gap-1"><div className="w-3 h-3 rounded-full" style={{background: t.bg}}/><div className="w-3 h-3 rounded-full" style={{background: t.text}}/></div>
                      </button>
                    ))}
                  </div>
                </section>
                <section>
                  <label className="text-[10px] font-black uppercase opacity-40 block mb-4">Typography</label>
                  <div className="grid gap-2">
                    {FONTS.map(f => (
                      <button key={f.name} onClick={() => setCurrentFont(f)} className={`p-4 text-left rounded-2xl border text-sm transition-all ${currentFont.name === f.name ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-zinc-600 border-zinc-100 hover:bg-zinc-50'}`}>{f.name}</button>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* CANVAS */}
      <main className="flex-1 flex flex-col relative bg-zinc-100/30 overflow-hidden">
        <header className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/90 backdrop-blur-xl border border-zinc-200 px-8 py-3.5 rounded-full z-40 shadow-2xl">
          {!isSidebarOpen && <button onClick={() => setIsSidebarOpen(true)} className="p-1 hover:bg-zinc-100 rounded-full"><Menu size={18}/></button>}
          <div className="flex bg-zinc-100 p-1 rounded-xl">
            <button onClick={() => setViewMode('desktop')} className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-white shadow text-black' : 'text-zinc-400'}`}><Monitor size={14} /></button>
            <button onClick={() => setViewMode('mobile')} className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-white shadow text-black' : 'text-zinc-400'}`}><Smartphone size={14} /></button>
          </div>
          <div className="h-4 w-[1px] bg-zinc-200 mx-2" />
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-300">
            {pages.map(p => (
              <button key={p.id} onClick={() => setActivePageId(p.id)} className={`transition-all ${activePageId === p.id ? 'text-black underline underline-offset-4' : 'hover:text-zinc-500'}`}>{p.name}</button>
            ))}
          </div>
          <button onClick={exportToHTML} className="bg-black text-white text-[10px] px-6 py-2 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2">
            <Download size={14} /> Export Site
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-16 pt-32 flex justify-center items-start scroll-smooth">
          <motion.div 
            layout
            animate={{ width: viewMode === 'mobile' ? 385 : '100%', maxWidth: viewMode === 'mobile' ? 385 : 1200, borderRadius: viewMode === 'mobile' ? 48 : 40 }}
            style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}
            className="min-h-[85vh] shadow-2xl overflow-hidden relative border border-white/20 transition-all duration-500"
          >
            <div className={viewMode === 'mobile' ? 'p-10' : 'p-24'}>
              <nav className="flex justify-between items-center mb-32">
                <div className="font-black italic text-2xl border-4 border-current px-2 select-none">
                  {logo ? <img src={logo} className="w-10 h-10 object-cover rounded-lg" /> : 'M.'}
                </div>
                <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                  {pages.map(p => (
                    <span key={p.id} onClick={() => setActivePageId(p.id)} className={`cursor-pointer hover:opacity-100 transition-all ${activePageId === p.id ? 'opacity-100 border-b border-current pb-1' : ''}`}>{p.name}</span>
                  ))}
                </div>
                <Menu className="md:hidden" size={24} />
              </nav>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activePageId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-48"
                >
                  {activePage.sections.map((section: any, idx: number) => (
                    <div key={section.id} className="relative">
                      <span className="text-[10px] font-black opacity-20 block mb-6 uppercase tracking-[0.5em]">// 0{idx+1} {section.type}</span>
                      <h2 className={`${viewMode === 'mobile' ? 'text-4xl' : 'text-8xl'} font-black tracking-tighter uppercase italic mb-12 leading-[0.85]`}>{section.title}</h2>
                      {section.type === 'Projects' ? (
                        <div className="space-y-32">
                          {section.items?.map((p: any) => (
                            <div key={p.id} className={`grid grid-cols-1 ${viewMode === 'mobile' ? '' : 'md:grid-cols-2'} gap-12 items-center`}>
                              <div className="aspect-square bg-zinc-500/10 rounded-[40px] overflow-hidden">
                                {p.img ? <img src={p.img} className="w-full h-full object-cover transition-transform hover:scale-105" /> : ''}
                              </div>
                              <div className="space-y-6">
                                <h3 className="text-4xl font-black uppercase italic tracking-tighter">{p.title}</h3>
                                <p className="text-xl opacity-50 font-medium">{p.desc}</p>
                                <a href={p.url} className="inline-block text-[10px] font-black uppercase tracking-widest border-b-2 border-current pb-2">View Project</a>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : section.items ? (
                        <div className="flex flex-wrap gap-x-12 gap-y-6">
                          {section.items.map((it: any) => (
                            <div key={it.id} className={`${viewMode === 'mobile' ? 'text-2xl' : 'text-5xl'} font-black uppercase italic opacity-30`}>{it.value}</div>
                          ))}
                        </div>
                      ) : (
                        <p className={`${viewMode === 'mobile' ? 'text-xl' : 'text-4xl'} font-medium max-w-4xl opacity-50`}>{section.content}</p>
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}