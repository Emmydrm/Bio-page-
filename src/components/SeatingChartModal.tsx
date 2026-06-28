import React, { useState, useEffect } from "react";
import { X, Search, UserPlus, Check, Sparkles, Trash2, ShieldAlert, CheckCircle2 } from "lucide-react";

interface SeatedGuest {
  id: string;
  name: string;
  email: string;
  dietary: "Standard" | "Vegan" | "Halal" | "Kosher" | "Gluten-Free";
  notes?: string;
  tableId: string;
}

interface Table {
  id: string;
  name: string;
  capacity: number;
}

const INITIAL_TABLES: Table[] = [
  { id: "t1", name: "Royal Arch (Table 1)", capacity: 6 },
  { id: "t2", name: "Golden Pavilion (Table 2)", capacity: 6 },
  { id: "t3", name: "Diamond VIP (Table 3)", capacity: 4 },
  { id: "t4", name: "Celestial Hall (Table 4)", capacity: 8 },
  { id: "t5", name: "Monarch Suite (Table 5)", capacity: 8 }
];

const INITIAL_GUESTS: SeatedGuest[] = [
  { id: "g-1", name: "Dr. Peter Emmanuel", email: "peter@activexperience.com", dietary: "Standard", tableId: "t3" },
  { id: "g-2", name: "Lady Cassandra Vance", email: "cassandra@luxuryvance.co.uk", dietary: "Vegan", tableId: "t3" },
  { id: "g-3", name: "Prince Adelusi Adelekan", email: "adelusi@royalpalace.ng", dietary: "Halal", tableId: "t1" },
  { id: "g-4", name: "Chief Mrs. Florence Alakija", email: "florence@alakijaenterprises.com", dietary: "Kosher", tableId: "t1" },
  { id: "g-5", name: "Lord Julian Sterling", email: "julian@sterlingholdings.sg", dietary: "Gluten-Free", tableId: "t2" },
  { id: "g-6", name: "Baroness Chloe Laurent", email: "chloe@laurentcouture.fr", dietary: "Standard", tableId: "t2" }
];

interface SeatingChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SeatingChartModal({ isOpen, onClose }: SeatingChartModalProps) {
  const [guests, setGuests] = useState<SeatedGuest[]>([]);
  const [selectedTable, setSelectedTable] = useState<string>("t1");
  const [searchQuery, setSearchQuery] = useState("");
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestEmail, setNewGuestEmail] = useState("");
  const [newGuestDiet, setNewGuestDiet] = useState<"Standard" | "Vegan" | "Halal" | "Kosher" | "Gluten-Free">("Standard");
  const [newGuestNotes, setNewGuestNotes] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  // Load guests from localstorage or initial list
  useEffect(() => {
    try {
      const stored = localStorage.getItem("ax_seating_guests");
      if (stored) {
        setGuests(JSON.parse(stored));
      } else {
        setGuests(INITIAL_GUESTS);
        localStorage.setItem("ax_seating_guests", JSON.stringify(INITIAL_GUESTS));
      }
    } catch {
      setGuests(INITIAL_GUESTS);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuestName || !newGuestEmail) return;

    // Check capacity
    const tableObj = INITIAL_TABLES.find(t => t.id === selectedTable);
    const currentlySeated = guests.filter(g => g.tableId === selectedTable).length;

    if (tableObj && currentlySeated >= tableObj.capacity) {
      showNotice(`Error: ${tableObj.name} is fully booked (${tableObj.capacity}/${tableObj.capacity})`);
      return;
    }

    const newGuest: SeatedGuest = {
      id: "G-" + Math.floor(1000 + Math.random() * 9000),
      name: newGuestName,
      email: newGuestEmail,
      dietary: newGuestDiet,
      notes: newGuestNotes,
      tableId: selectedTable
    };

    const updated = [...guests, newGuest];
    setGuests(updated);
    localStorage.setItem("ax_seating_guests", JSON.stringify(updated));

    // Reset inputs
    setNewGuestName("");
    setNewGuestEmail("");
    setNewGuestNotes("");
    setNewGuestDiet("Standard");
    showNotice(`Successfully seated ${newGuest.name} at Table`);
  };

  const handleRemoveGuest = (id: string, name: string) => {
    const updated = guests.filter(g => g.id !== id);
    setGuests(updated);
    localStorage.setItem("ax_seating_guests", JSON.stringify(updated));
    showNotice(`Removed ${name} from seating chart`);
  };

  const handleResetSeating = () => {
    if (window.confirm("Are you sure you want to restore the default luxury guest list?")) {
      setGuests(INITIAL_GUESTS);
      localStorage.setItem("ax_seating_guests", JSON.stringify(INITIAL_GUESTS));
      showNotice("Seating chart reset to default VIP list");
    }
  };

  // Filter guests seated at current selected table
  const seatedAtSelected = guests.filter(g => g.tableId === selectedTable);
  const currentTableObj = INITIAL_TABLES.find(t => t.id === selectedTable);

  // Search functionality (finds matches across any table)
  const searchResults = searchQuery
    ? guests.filter(g => g.name.toLowerCase().includes(searchQuery.toLowerCase()) || g.email.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Modal Card container */}
      <div className="relative w-full max-w-lg overflow-hidden bg-theme-modal-bg rounded-2xl border border-theme-border gold-glow shadow-2xl transition-all duration-300 flex flex-col h-[90vh] max-h-[800px]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-theme-border-light bg-gradient-to-r from-gold-950/20 via-transparent to-transparent shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-500 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="flex flex-col text-left">
              <h2 className="font-serif text-base text-theme-text-primary font-medium tracking-wide">
                Digital Seating Chart
              </h2>
              <span className="font-mono text-[9px] text-gold-500 uppercase tracking-widest">
                VIP Guest Management Concierge
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-theme-text-muted hover:text-theme-text-primary hover:bg-gold-950/40 transition-colors"
            id="close-seating-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global search banner */}
        <div className="px-4 py-3 border-b border-theme-border-light bg-theme-bg shrink-0">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gold-500/60">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search seated VIP guests by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-theme-input-bg border border-theme-border-light rounded-xl pl-9 pr-3 py-2 text-xs text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Search results popup list */}
          {searchQuery && (
            <div className="mt-2 bg-theme-card border border-gold-500/40 rounded-xl p-2.5 max-h-36 overflow-y-auto space-y-1.5 animate-fade-in shadow-xl">
              <div className="flex justify-between items-center text-[9px] text-gold-500 font-mono tracking-wider uppercase border-b border-theme-border-light pb-1 mb-1">
                <span>Search Matches ({searchResults.length})</span>
                <button onClick={() => setSearchQuery("")} className="text-theme-text-muted hover:text-white uppercase font-bold">Clear</button>
              </div>
              {searchResults.map((g) => {
                const table = INITIAL_TABLES.find(t => t.id === g.tableId);
                return (
                  <div key={g.id} className="flex justify-between items-center bg-theme-bg/60 p-1.5 rounded-lg border border-theme-border-light text-[11px]">
                    <div className="text-left">
                      <span className="font-semibold text-theme-text-primary block">{g.name}</span>
                      <span className="text-[9px] text-theme-text-muted font-mono">{g.email}</span>
                    </div>
                    <div className="text-right">
                      <span className="px-1.5 py-0.5 bg-gold-500/10 border border-gold-500/40 text-[9px] text-gold-400 font-mono rounded">
                        {table ? table.name.split(" (")[0] : "Unknown Table"}
                      </span>
                    </div>
                  </div>
                );
              })}
              {searchResults.length === 0 && (
                <p className="text-[10px] text-theme-text-muted italic py-2 text-center">No matching VIP guest found seated anywhere.</p>
              )}
            </div>
          )}
        </div>

        {/* Content layout - split or vertical scrollable */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* Table select carousel */}
          <div className="space-y-2">
            <span className="font-mono text-[9px] text-gold-500 uppercase tracking-widest block text-left">
              Select Luxury Installation Table
            </span>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {INITIAL_TABLES.map((t) => {
                const seatedCount = guests.filter(g => g.tableId === t.id).length;
                const isSelected = selectedTable === t.id;
                const isFull = seatedCount >= t.capacity;

                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTable(t.id)}
                    className={`px-3 py-2 rounded-xl text-left transition-all border shrink-0 cursor-pointer min-w-[120px] ${
                      isSelected
                        ? "bg-theme-card border-gold-500 shadow-md gold-glow"
                        : "bg-theme-nav-btn border-theme-border-light hover:border-gold-500/40"
                    }`}
                  >
                    <div className="font-serif text-xs font-semibold text-theme-text-primary tracking-wide truncate">
                      {t.name.split(" (")[0]}
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="font-mono text-[9px] text-theme-text-muted">Capacity</span>
                      <span className={`font-mono text-[10px] font-bold ${isFull ? "text-red-400" : "text-gold-500"}`}>
                        {seatedCount}/{t.capacity}
                      </span>
                    </div>
                    {/* Capacity visual bar */}
                    <div className="w-full bg-theme-input-bg h-1 rounded-full overflow-hidden mt-1.5">
                      <div
                        className={`h-full transition-all duration-300 ${isFull ? "bg-red-400" : "bg-gold-500"}`}
                        style={{ width: `${Math.min(100, (seatedCount / t.capacity) * 100)}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Table Guest List */}
          <div className="bg-theme-card border border-theme-border-light rounded-xl p-4 text-left">
            <div className="flex justify-between items-center border-b border-theme-border-light pb-2.5 mb-3">
              <div>
                <h3 className="font-serif text-sm font-semibold text-theme-text-primary">
                  Guests seated at {currentTableObj?.name}
                </h3>
                <p className="text-[10px] text-theme-text-muted">
                  Managing table allocation with real-time dietary tags.
                </p>
              </div>
              <span className="font-mono text-[10px] bg-theme-bg border border-theme-border-light px-2.5 py-0.5 rounded-full text-gold-400">
                {seatedAtSelected.length} of {currentTableObj?.capacity} filled
              </span>
            </div>

            <div className="space-y-2 max-h-56 overflow-y-auto">
              {seatedAtSelected.map((g) => (
                <div key={g.id} className="flex justify-between items-center bg-theme-bg/40 border border-theme-border-light/60 p-2.5 rounded-xl hover:border-gold-500/30 transition-all">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 flex items-center justify-center font-serif text-xs font-bold shrink-0">
                      {g.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-theme-text-primary leading-none">{g.name}</span>
                        <span className="font-mono text-[8px] bg-gold-950/20 text-gold-400 border border-gold-900/40 px-1 py-0.5 rounded leading-none uppercase">
                          {g.dietary}
                        </span>
                      </div>
                      <span className="text-[10px] text-theme-text-muted font-mono block mt-0.5">{g.email}</span>
                      {g.notes && (
                        <p className="text-[10px] text-theme-text-muted italic mt-1 font-sans border-l border-gold-500/20 pl-1.5">
                          &ldquo;{g.notes}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveGuest(g.id, g.name)}
                    className="p-1.5 rounded-lg text-theme-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors cursor-pointer"
                    title="Remove guest"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {seatedAtSelected.length === 0 && (
                <div className="text-center py-6">
                  <UserPlus className="w-6 h-6 text-theme-text-muted/40 mx-auto mb-1 animate-pulse" />
                  <p className="text-xs text-theme-text-muted italic">This luxury table is currently empty.</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Seat Guest Form */}
          <form onSubmit={handleAddGuest} className="bg-theme-card border border-theme-border-light rounded-xl p-4 text-left space-y-3">
            <div className="border-b border-theme-border-light pb-2">
              <span className="font-mono text-[8px] text-gold-500 uppercase tracking-widest font-bold">Fast Assignment Console</span>
              <h4 className="font-serif text-xs font-bold text-theme-text-primary mt-0.5">Seating Assign Concierge</h4>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-theme-text-muted font-mono uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter VIP name"
                  value={newGuestName}
                  onChange={(e) => setNewGuestName(e.target.value)}
                  className="w-full bg-theme-input-bg border border-theme-border-light rounded-xl px-3 py-2 text-xs text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-theme-text-muted font-mono uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@vippass.com"
                  value={newGuestEmail}
                  onChange={(e) => setNewGuestEmail(e.target.value)}
                  className="w-full bg-theme-input-bg border border-theme-border-light rounded-xl px-3 py-2 text-xs text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-theme-text-muted font-mono uppercase">Dietary Preference</label>
                <select
                  value={newGuestDiet}
                  onChange={(e) => setNewGuestDiet(e.target.value as any)}
                  className="w-full bg-theme-input-bg border border-theme-border-light rounded-xl px-2.5 py-2 text-xs text-theme-text-primary focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                >
                  <option value="Standard">Standard Menu</option>
                  <option value="Vegan">Vegan (Plant-Based)</option>
                  <option value="Halal">Halal Certified</option>
                  <option value="Kosher">Kosher Compliant</option>
                  <option value="Gluten-Free">Gluten-Free</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-theme-text-muted font-mono uppercase">Notes / Table Requests</label>
                <input
                  type="text"
                  placeholder="e.g. Near main stage"
                  value={newGuestNotes}
                  onChange={(e) => setNewGuestNotes(e.target.value)}
                  className="w-full bg-theme-input-bg border border-theme-border-light rounded-xl px-3 py-2 text-xs text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer"
              id="submit-seating-form"
            >
              Secure Seating Assignment
            </button>
          </form>

        </div>

        {/* Dynamic Toast / Notice Bar inside Modal */}
        {notification && (
          <div className="absolute top-14 inset-x-4 z-50 animate-fade-in shrink-0">
            <div className="bg-neutral-900/95 border border-gold-500/60 text-white text-[11px] px-3 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 max-w-sm mx-auto gold-glow">
              {notification.startsWith("Error") ? (
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
              )}
              <p className="font-sans font-medium tracking-wide text-gray-200">
                {notification}
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA bar */}
        <div className="p-3 bg-theme-nav-btn border-t border-theme-border-light flex justify-between items-center shrink-0">
          <button
            onClick={handleResetSeating}
            className="text-[9px] font-mono text-theme-text-muted hover:text-red-400 tracking-wider uppercase underline decoration-dashed cursor-pointer"
          >
            Reset to Default VIP List
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-theme-header-ctrl text-gold-400 border border-theme-border-light hover:border-gold-500 text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
          >
            Finished Setup
          </button>
        </div>
      </div>
    </div>
  );
}
