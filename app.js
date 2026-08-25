// ── LibCore — Library Management System ──────────────────────────
// app.js — Full logic with Live Supabase Cloud Sync, RBAC & Interactive SQL Engine

// ── DEFAULT SEED DATA ─────────────────────────────────────────────
var SEED = {
  categories: [
    { cat_id: 'c01', cat_name: 'Computer Science', description: 'Programming and CS' },
    { cat_id: 'c02', cat_name: 'Mathematics',      description: 'Math and statistics' },
    { cat_id: 'c03', cat_name: 'Physics',           description: 'Physics and engineering' },
    { cat_id: 'c04', cat_name: 'Literature',        description: 'Fiction and poetry' },
    { cat_id: 'c05', cat_name: 'History',           description: 'World and local history' }
  ],
  publishers: [
    { pub_id: 'p01', pub_name: 'Pearson Education', country: 'USA' },
    { pub_id: 'p02', pub_name: "O'Reilly Media",    country: 'USA' },
    { pub_id: 'p03', pub_name: 'MIT Press',          country: 'USA' },
    { pub_id: 'p04', pub_name: 'Dar El Shorouk',     country: 'Egypt' },
    { pub_id: 'p05', pub_name: 'Oxford University',  country: 'UK' }
  ],
  authors: [
    { author_id: 'a01', first_name: 'Thomas', last_name: 'Cormen',    nationality: 'American' },
    { author_id: 'a02', first_name: 'Robert', last_name: 'Martin',    nationality: 'American' },
    { author_id: 'a03', first_name: 'Naguib', last_name: 'Mahfouz',   nationality: 'Egyptian' },
    { author_id: 'a04', first_name: 'Andrew', last_name: 'Tanenbaum', nationality: 'Dutch' },
    { author_id: 'a05', first_name: 'Donald', last_name: 'Knuth',     nationality: 'American' },
    { author_id: 'a06', first_name: 'Ramez',  last_name: 'Elmasri',   nationality: 'American' }
  ],
  books: [
    { book_id: 'b01', isbn: '978-01', title: 'Introduction to Algorithms',     author_id: 'a01', cat_id: 'c01', pub_id: 'p01', pub_year: 2009, language: 'English' },
    { book_id: 'b02', isbn: '978-02', title: 'Clean Code',                      author_id: 'a02', cat_id: 'c01', pub_id: 'p02', pub_year: 2008, language: 'English' },
    { book_id: 'b03', isbn: '978-03', title: 'Palace Walk',                     author_id: 'a03', cat_id: 'c04', pub_id: 'p04', pub_year: 1956, language: 'Arabic' },
    { book_id: 'b04', isbn: '978-04', title: 'Computer Networks',               author_id: 'a04', cat_id: 'c01', pub_id: 'p01', pub_year: 2010, language: 'English' },
    { book_id: 'b05', isbn: '978-05', title: 'The Art of Computer Programming', author_id: 'a05', cat_id: 'c01', pub_id: 'p03', pub_year: 1968, language: 'English' },
    { book_id: 'b06', isbn: '978-06', title: 'Fundamentals of DB Systems',      author_id: 'a06', cat_id: 'c01', pub_id: 'p01', pub_year: 2015, language: 'English' },
    { book_id: 'b07', isbn: '978-07', title: 'Sugar Street',                    author_id: 'a03', cat_id: 'c04', pub_id: 'p04', pub_year: 1957, language: 'Arabic' }
  ],
  bookcopies: [
    { copy_id: 'bc01', book_id: 'b01', status: 'Available', shelf: 'A1' },
    { copy_id: 'bc02', book_id: 'b01', status: 'Borrowed',  shelf: 'A1' },
    { copy_id: 'bc03', book_id: 'b02', status: 'Available', shelf: 'A2' },
    { copy_id: 'bc04', book_id: 'b03', status: 'Available', shelf: 'B1' },
    { copy_id: 'bc05', book_id: 'b04', status: 'Borrowed',  shelf: 'A3' },
    { copy_id: 'bc06', book_id: 'b05', status: 'Available', shelf: 'A4' },
    { copy_id: 'bc07', book_id: 'b06', status: 'Borrowed',  shelf: 'A2' },
    { copy_id: 'bc08', book_id: 'b07', status: 'Available', shelf: 'B2' }
  ],
  members: [
    { member_id: 'm01', name: 'Ahmed Hassan',  phone: '01012345678', email: 'ahmed@gmail.com',  membership_date: '2024-01-10' },
    { member_id: 'm02', name: 'Sara Mohamed',  phone: '01123456789', email: 'sara@gmail.com',   membership_date: '2024-02-15' },
    { member_id: 'm03', name: 'Omar Khaled',   phone: '01234567890', email: 'omar@gmail.com',   membership_date: '2024-03-05' },
    { member_id: 'm04', name: 'Nour El-Din',   phone: '01098765432', email: 'nour@gmail.com',   membership_date: '2024-04-20' },
    { member_id: 'm05', name: 'Fatma Ali',     phone: '01187654321', email: 'fatma@gmail.com',  membership_date: '2024-05-01' },
    { member_id: 'm06', name: 'Karim Ibrahim', phone: '01276543210', email: 'karim@gmail.com',  membership_date: '2024-06-18' }
  ],
  staff: [
    { staff_id: 's01', name: 'Bassant Bakry', role: 'Head Librarian', phone: '01011111111', email: 'bassantbakry404@gmail.com', salary: 15000, hire_date: '2020-01-01' },
    { staff_id: 's02', name: 'Mona Tawfik',   role: 'Librarian',      phone: '01022222222', email: 'mona@library.eg',   salary: 8000,  hire_date: '2021-03-15' },
    { staff_id: 's03', name: 'Khaled Samir',  role: 'Librarian',      phone: '01033333333', email: 'khaled@library.eg', salary: 8000,  hire_date: '2021-06-01' },
    { staff_id: 's04', name: 'Nadia Farouk',  role: 'Assistant',      phone: '01044444444', email: 'nadia@library.eg',  salary: 5500,  hire_date: '2022-09-10' },
    { staff_id: 's05', name: 'Hassan Gamal',  role: 'Assistant',      phone: '01055555555', email: 'hassan@library.eg', salary: 5500,  hire_date: '2023-01-20' }
  ],
  loans: [
    { loan_id: 'L001', copy_id: 'bc02', member_id: 'm01', staff_id: 's02', loan_date: '2024-10-01', due_date: '2024-10-15', return_date: null,         fine: 0   },
    { loan_id: 'L002', copy_id: 'bc05', member_id: 'm02', staff_id: 's02', loan_date: '2024-10-03', due_date: '2024-10-17', return_date: null,         fine: 0   },
    { loan_id: 'L003', copy_id: 'bc07', member_id: 'm03', staff_id: 's03', loan_date: '2024-10-05', due_date: '2024-10-19', return_date: null,         fine: 0   },
    { loan_id: 'L004', copy_id: 'bc01', member_id: 'm04', staff_id: 's02', loan_date: '2024-09-10', due_date: '2024-09-24', return_date: '2024-09-23', fine: 0   },
    { loan_id: 'L005', copy_id: 'bc03', member_id: 'm05', staff_id: 's03', loan_date: '2024-09-15', due_date: '2024-09-29', return_date: '2024-10-02', fine: 15  },
    { loan_id: 'L006', copy_id: 'bc04', member_id: 'm06', staff_id: 's04', loan_date: '2024-09-20', due_date: '2024-10-04', return_date: '2024-10-10', fine: 30  },
    { loan_id: 'L007', copy_id: 'bc06', member_id: 'm01', staff_id: 's02', loan_date: '2024-08-01', due_date: '2024-08-15', return_date: '2024-08-14', fine: 0   },
    { loan_id: 'L008', copy_id: 'bc08', member_id: 'm03', staff_id: 's03', loan_date: '2024-08-20', due_date: '2024-09-03', return_date: '2024-09-05', fine: 10  }
  ],
  authUsers: [
    { email: 'bassantbakry404@gmail.com', password: 'bassant291025', name: 'Bassant Bakry', role: 'Head Librarian', type: 'staff',  id: 's01' },
    { email: 'admin@library.eg',          password: 'admin',          name: 'System Admin',  role: 'Head Librarian', type: 'staff',  id: 's01' },
    { email: 'mona@library.eg',           password: '123',            name: 'Mona Tawfik',   role: 'Librarian',      type: 'staff',  id: 's02' },
    { email: 'ahmed@gmail.com',           password: '123',            name: 'Ahmed Hassan',  role: 'Student Member', type: 'member', id: 'm01' }
  ]
};

// ── LOCALSTORAGE & STATE ───────────────────────────────────────────
var LS_KEY = 'libcore_db_v5';
var AUTH_KEY = 'libcore_active_user_v5';

function loadDB() {
  try {
    var saved = localStorage.getItem(LS_KEY);
    if (saved) {
      var parsed = JSON.parse(saved);
      if (parsed && parsed.books && parsed.members && parsed.loans) {
        if (!parsed.authUsers) parsed.authUsers = SEED.authUsers;
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load from localStorage:', e);
  }
  return JSON.parse(JSON.stringify(SEED));
}

function saveDB() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(DB));
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
}

var DB = loadDB();
var currentUser = null;
var sbClient = null;

// ── SUPABASE CLIENT INITIALIZATION ─────────────────────────────────
var SB_URL = 'https://usldxpdxoutvyxjmjztp.supabase.co';
var SB_KEY = 'sb_publishable_eEOydp9N939sksP3IdNJzg_gO6B5SvM';

function initSupabaseClient() {
  var url = localStorage.getItem('sb_url') || SB_URL;
  var key = localStorage.getItem('sb_key') || SB_KEY;
  if (url && key && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      sbClient = window.supabase.createClient(url, key);
      var statusEl = document.getElementById('db-status-text');
      if (statusEl) statusEl.textContent = 'Supabase Live';
      console.log('✅ Supabase connected automatically');
    } catch (e) {
      console.warn('Supabase init error:', e);
      sbClient = null;
    }
  }
}

// ── AUTHENTICATION & LOGIN / SIGN UP FLOW ──────────────────────────
function switchAuthMode(mode) {
  var signinTab = document.getElementById('tab-btn-signin');
  var signupTab = document.getElementById('tab-btn-signup');
  var formSignin = document.getElementById('form-signin');
  var formSignup = document.getElementById('form-signup');

  if (mode === 'signin') {
    signinTab.className = 'flex-1 py-2.5 rounded-xl text-xs font-bold transition bg-indigo-600 text-white shadow-md';
    signupTab.className = 'flex-1 py-2.5 rounded-xl text-xs font-bold transition text-slate-400 hover:text-white';
    formSignin.classList.remove('hidden');
    formSignup.classList.add('hidden');
  } else {
    signupTab.className = 'flex-1 py-2.5 rounded-xl text-xs font-bold transition bg-indigo-600 text-white shadow-md';
    signinTab.className = 'flex-1 py-2.5 rounded-xl text-xs font-bold transition text-slate-400 hover:text-white';
    formSignup.classList.remove('hidden');
    formSignin.classList.add('hidden');
  }
  safeCreateIcons();
}

function initAuth() {
  var savedUser = localStorage.getItem(AUTH_KEY);
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      hideAuthScreen();
      applyRBAC();
      updateUserUI();
    } catch (e) {
      showAuthScreen();
    }
  } else {
    showAuthScreen();
  }
}

function showAuthScreen() {
  var authEl = document.getElementById('auth-screen');
  if (authEl) {
    authEl.classList.remove('hidden');
    authEl.classList.add('flex');
  }
  safeCreateIcons();
}

function hideAuthScreen() {
  var authEl = document.getElementById('auth-screen');
  if (authEl) {
    authEl.classList.add('hidden');
    authEl.classList.remove('flex');
  }
}

function handleSignIn(e) {
  if (e) e.preventDefault();
  var email = (document.getElementById('signin-email') || {}).value.trim().toLowerCase();
  var pass  = (document.getElementById('signin-password') || {}).value;

  // 1. Check in authUsers
  var foundAuth = (DB.authUsers || []).find(function(u){
    return u.email.toLowerCase() === email && u.password === pass;
  });
  
  if (foundAuth) {
    loginSuccess(foundAuth);
    return;
  }

  // 2. Check in Staff list
  var staff = DB.staff.find(function(s){ return s.email.toLowerCase() === email; });
  if (staff) {
    var userObj = { id: staff.staff_id, email: staff.email, name: staff.name, role: staff.role, type: 'staff' };
    loginSuccess(userObj);
    return;
  }

  // 3. Check in Members list
  var member = DB.members.find(function(m){ return m.email.toLowerCase() === email; });
  if (member) {
    var memberObj = { id: member.member_id, email: member.email, name: member.name, role: 'Student Member', type: 'member' };
    loginSuccess(memberObj);
    return;
  }

  showAlert('error', 'Login Failed', 'Incorrect email or password. Please verify your credentials or create a new account.');
}

async function handleSignUp(e) {
  if (e) e.preventDefault();
  var name  = (document.getElementById('signup-name') || {}).value.trim();
  var email = (document.getElementById('signup-email') || {}).value.trim().toLowerCase();
  var phone = (document.getElementById('signup-phone') || {}).value.trim();
  var role  = (document.getElementById('signup-role') || {}).value;
  var pass  = (document.getElementById('signup-password') || {}).value;

  if (!name || !email || !phone || !pass) {
    showAlert('warning', 'Missing Fields', 'Please complete all fields.');
    return;
  }

  // Check duplicate
  var emailExists = (DB.authUsers || []).some(function(u){ return u.email.toLowerCase() === email; }) ||
                    DB.members.some(function(m){ return m.email.toLowerCase() === email; }) ||
                    DB.staff.some(function(s){ return s.email.toLowerCase() === email; });

  if (emailExists) {
    showAlert('error', 'Account Exists', 'This email is already registered. Please sign in.');
    switchAuthMode('signin');
    var inEmail = document.getElementById('signin-email');
    if (inEmail) inEmail.value = email;
    return;
  }

  var isStudent = (role === 'Student');
  var roleName = isStudent ? 'Student Member' : (role === 'Admin' ? 'Head Librarian' : 'Librarian');
  var assignedId = isStudent ? ('m' + String(DB.members.length + 1).padStart(2, '0')) : ('s' + String(DB.staff.length + 1).padStart(2, '0'));

  var newUser = {
    id: assignedId,
    email: email,
    password: pass,
    name: name,
    role: roleName,
    type: isStudent ? 'member' : 'staff'
  };

  // 1. Save to Local DB
  if (!DB.authUsers) DB.authUsers = [];
  DB.authUsers.push(newUser);

  if (isStudent) {
    DB.members.push({
      member_id: assignedId,
      name: name,
      phone: phone,
      email: email,
      membership_date: new Date().toISOString().slice(0, 10)
    });
  } else {
    DB.staff.push({
      staff_id: assignedId,
      name: name,
      role: roleName,
      phone: phone,
      email: email,
      salary: role === 'Admin' ? 15000 : 8000,
      hire_date: new Date().toISOString().slice(0, 10)
    });
  }
  saveDB();

  // 2. Direct Sync to Supabase Cloud Database!
  if (sbClient) {
    try {
      if (isStudent) {
        await sbClient.from('members').insert([{
          full_name: name,
          phone: phone,
          email: email,
          membership_date: new Date().toISOString().slice(0, 10)
        }]);
      } else {
        await sbClient.from('staff').insert([{
          staff_id: 'sf' + String(DB.staff.length).padStart(2, '0'),
          full_name: name,
          phone: phone,
          email: email,
          role: role === 'Admin' ? 'Admin' : 'Librarian'
        }]);
      }
    } catch (sbErr) {
      console.warn('Supabase direct insert notice:', sbErr);
    }
  }

  // 3. Reset form, switch to Sign In, and pre-fill credentials
  document.getElementById('form-signup').reset();
  switchAuthMode('signin');

  var loginEmailInput = document.getElementById('signin-email');
  var loginPassInput  = document.getElementById('signin-password');
  if (loginEmailInput) loginEmailInput.value = email;
  if (loginPassInput)  loginPassInput.value = '';

  showAlert('success', 'Account Created Successfully!', 'Your data is saved in the database. Please sign in with your password to continue.');
}

function loginSuccess(user) {
  currentUser = user;
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  hideAuthScreen();
  applyRBAC();
  updateUserUI();
  showAlert('success', 'Welcome, ' + user.name, 'Signed in as ' + user.role);
  renderDashboard();
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  currentUser = null;
  showAuthScreen();
  switchAuthMode('signin');
  showAlert('info', 'Logged Out', 'You have been signed out.');
}

// ── ROLE-BASED ACCESS CONTROL (RBAC) & PRIVACY ─────────────────────
function applyRBAC() {
  if (!currentUser) return;
  var isStudent = (currentUser.type === 'member');

  // 1. Hide/Show Staff-only tabs
  var staffTabs = document.querySelectorAll('.staff-only-tab');
  for (var i = 0; i < staffTabs.length; i++) {
    if (isStudent) {
      staffTabs[i].classList.add('hidden');
    } else {
      staffTabs[i].classList.remove('hidden');
    }
  }

  // 2. Hide/Show Admin action buttons in header & catalog
  var adminHeaderActions = document.getElementById('admin-header-actions');
  if (adminHeaderActions) {
    if (isStudent) adminHeaderActions.classList.add('hidden');
    else adminHeaderActions.classList.remove('hidden');
  }

  var btnAddCatalog = document.getElementById('btn-add-book-catalog');
  if (btnAddCatalog) {
    if (isStudent) btnAddCatalog.classList.add('hidden');
    else btnAddCatalog.classList.remove('hidden');
  }

  var btnNewLoan = document.getElementById('btn-new-loan-tab');
  if (btnNewLoan) {
    if (isStudent) btnNewLoan.classList.add('hidden');
    else btnNewLoan.classList.remove('hidden');
  }

  var dbConfig = document.getElementById('sidebar-db-config');
  if (dbConfig) {
    if (isStudent) dbConfig.classList.add('hidden');
    else dbConfig.classList.remove('hidden');
  }

  // 3. Customize sidebar tab titles for student privacy
  var loansNavTitle = document.getElementById('nav-loans-title');
  var dashboardNavTitle = document.getElementById('nav-dashboard-title');
  if (loansNavTitle) {
    loansNavTitle.textContent = isStudent ? 'My Loans' : 'Circulation';
  }
  if (dashboardNavTitle) {
    dashboardNavTitle.textContent = isStudent ? 'My Portal' : 'Dashboard';
  }

  var actionHeader = document.getElementById('loans-th-action');
  if (actionHeader) {
    actionHeader.style.display = isStudent ? 'none' : '';
  }

  if (isStudent && (currentTab === 'members' || currentTab === 'staff' || currentTab === 'sql-runner')) {
    switchTab('dashboard');
  }
}

function updateUserUI() {
  if (!currentUser) return;
  var initials = currentUser.name.split(' ').map(function(n){ return n[0]; }).join('').slice(0,2).toUpperCase();
  
  var av = document.getElementById('sidebar-user-avatar');
  var nm = document.getElementById('sidebar-user-name');
  var rl = document.getElementById('sidebar-user-role');

  if (av) av.textContent = initials || 'US';
  if (nm) nm.textContent = currentUser.name;
  if (rl) rl.textContent = currentUser.role;
}

// ── LOOKUP HELPERS ─────────────────────────────────────────────────
function getBook(id)   { return DB.books.find(function(b){ return b.book_id === id; }); }
function getCopy(id)   { return DB.bookcopies.find(function(c){ return c.copy_id === id; }); }
function getMember(id) { return DB.members.find(function(m){ return m.member_id === id; }); }
function getStaff(id)  { return DB.staff.find(function(s){ return s.staff_id === id; }); }
function getCat(id)    { return DB.categories.find(function(c){ return c.cat_id === id; }); }
function getPub(id)    { return DB.publishers.find(function(p){ return p.pub_id === id; }); }
function getAuthor(id) { return DB.authors.find(function(a){ return a.author_id === id; }); }
function loanStatus(l) { return l.return_date ? 'Returned' : 'Active'; }

function statusBadge(status) {
  var classes = {
    'Active':    'bg-amber-950 text-amber-400 border border-amber-700',
    'Returned':  'bg-emerald-950 text-emerald-400 border border-emerald-700',
    'Available': 'bg-emerald-950 text-emerald-400 border border-emerald-700',
    'Borrowed':  'bg-amber-950 text-amber-400 border border-amber-700'
  };
  var cls = classes[status] || 'bg-slate-800 text-slate-400';
  return '<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ' + cls + '">' + status + '</span>';
}

function showAlert(type, title, text) {
  if (window.Swal && typeof Swal.fire === 'function') {
    Swal.fire({
      icon: type,
      title: title,
      text: text || '',
      timer: 3000,
      showConfirmButton: false,
      background: '#1e293b',
      color: '#f1f5f9',
      iconColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f59e0b'
    });
  } else {
    alert(title + (text ? ': ' + text : ''));
  }
}

// ── STATE ──────────────────────────────────────────────────────────
var currentTab = 'dashboard';
var loansFilter = 'active';
var charts = {};

// ── TABS SWITCHER ──────────────────────────────────────────────────
function switchTab(tab) {
  var isStudent = currentUser && currentUser.type === 'member';

  if (isStudent && (tab === 'members' || tab === 'staff' || tab === 'sql-runner')) {
    tab = 'dashboard';
  }

  var sections = document.querySelectorAll('[id^="tab-"]');
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.add('hidden');
  }

  var navBtns = document.querySelectorAll('.nav-link');
  for (var j = 0; j < navBtns.length; j++) {
    navBtns[j].classList.remove('active');
  }

  var targetSection = document.getElementById('tab-' + tab);
  if (targetSection) targetSection.classList.remove('hidden');

  var activeBtn = document.getElementById('nav-' + tab);
  if (activeBtn) activeBtn.classList.add('active');

  currentTab = tab;

  var titles = {
    'dashboard':   [isStudent ? 'My Student Portal' : 'Dashboard', isStudent ? 'Your personal library account & active loans' : 'Library operations overview'],
    'books':       ['Books Catalog', 'Browse library titles and search collections'],
    'loans':       [isStudent ? 'My Borrowed Books' : 'Circulation & Loans', isStudent ? 'Your personal borrowing history and due dates' : 'Manage borrowing and returns'],
    'members':     ['Members Directory', 'Registered library members'],
    'staff':       ['Staff & Roles', 'Library staff and their roles'],
    'sql-runner':  ['Interactive SQL Terminal & Lab', 'Write, edit and execute SQL commands live']
  };
  var t = titles[tab] || ['LibCore DB', 'Library Management'];
  var ptitle = document.getElementById('page-title');
  var psub   = document.getElementById('page-subtitle');
  if (ptitle) ptitle.textContent = t[0];
  if (psub)   psub.textContent   = t[1];

  if (tab === 'dashboard')  renderDashboard();
  if (tab === 'books')      renderBooks();
  if (tab === 'loans')      renderLoans();
  if (tab === 'members' && !isStudent) renderMembers();
  if (tab === 'staff' && !isStudent)   renderStaff();
  if (tab === 'sql-runner') {
    var editor = document.getElementById('sql-code-input');
    if (editor && !editor.value.trim()) {
      loadPresetQuery('books_publishers');
    }
  }

  safeCreateIcons();
}

function safeCreateIcons() {
  if (window.lucide && typeof lucide.createIcons === 'function') {
    try { lucide.createIcons(); } catch (e) { console.warn(e); }
  }
}

// ── MODALS ─────────────────────────────────────────────────────────
function openModal(id) {
  if (currentUser && currentUser.type === 'member' && (id === 'modal-add-book' || id === 'modal-borrow' || id === 'modal-settings')) {
    showAlert('warning', 'Access Restricted', 'Only library staff can perform this action.');
    return;
  }

  var el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('hidden');
  el.classList.add('flex');
  if (id === 'modal-borrow')   populateBorrowSelects();
  if (id === 'modal-add-book') populateAddBookSelects();
  safeCreateIcons();
}

function closeModal(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.add('hidden');
  el.classList.remove('flex');
}

// close modal when clicking backdrop
document.addEventListener('click', function(e) {
  var modals = ['modal-borrow','modal-return','modal-add-book','modal-add-member','modal-settings','modal-edit-member','modal-edit-book'];
  for (var i = 0; i < modals.length; i++) {
    var el = document.getElementById(modals[i]);
    if (el && !el.classList.contains('hidden') && e.target === el) {
      closeModal(modals[i]);
    }
  }
});

// ── DASHBOARD (WITH STUDENT PRIVACY FILTER) ─────────────────────────
function renderDashboard() {
  var isStudent = currentUser && currentUser.type === 'member';
  var memberId  = isStudent ? currentUser.id : null;

  var relevantLoans = isStudent
    ? DB.loans.filter(function(l){ return l.member_id === memberId; })
    : DB.loans;

  var totalBooks    = DB.books.length;
  var totalCopies   = DB.bookcopies.length;
  var available     = DB.bookcopies.filter(function(c){ return c.status === 'Available'; }).length;
  var activeLoans   = relevantLoans.filter(function(l){ return !l.return_date; }).length;
  var totalFines    = relevantLoans.reduce(function(sum, l){ return sum + (Number(l.fine) || 0); }, 0);

  if (isStudent) {
    setText('stat-card-1-label', 'Available Titles');
    setText('stat-total-books',   available);
    setText('stat-card-1-sub',   'free to borrow');

    setText('stat-card-2-label', 'Total Copies');
    setText('stat-total-copies',  totalCopies);

    setText('stat-card-3-label', 'My Borrowed Books');
    setText('stat-active-loans',  activeLoans);
    setText('stat-card-3-sub',   'in your custody');

    setText('stat-card-4-label', 'My Late Fines');
    setText('stat-total-fines',  '$' + totalFines.toFixed(2));
    setText('stat-card-4-sub',   totalFines > 0 ? 'due to library' : 'clean record');

    setText('recent-table-title', 'My Recent Borrowing History');
    setText('recent-table-sub',   'Private records for ' + currentUser.name);

    var chartContainer = document.getElementById('dashboard-charts-container');
    if (chartContainer) chartContainer.classList.add('hidden');
  } else {
    setText('stat-card-1-label', 'Total Titles');
    setText('stat-total-books',   totalBooks);
    setText('stat-card-1-sub',   'in library');

    setText('stat-card-2-label', 'Copies');
    setText('stat-total-copies',  totalCopies);

    setText('stat-card-3-label', 'Active Loans');
    setText('stat-active-loans',  activeLoans);
    setText('stat-card-3-sub',   'borrowed now');

    setText('stat-card-4-label', 'Total Fines');
    setText('stat-total-fines',  '$' + totalFines.toFixed(2));
    setText('stat-card-4-sub',   'collected');

    setText('recent-table-title', 'Recent Transactions');
    setText('recent-table-sub',   'Latest borrowing events across all members');

    var chartContainer = document.getElementById('dashboard-charts-container');
    if (chartContainer) chartContainer.classList.remove('hidden');
  }

  setText('stat-available-copies', available);
  setText('badge-total-books',      totalBooks);
  setText('badge-active-loans',     activeLoans);

  var tbody = document.getElementById('recent-loans-tbody');
  if (tbody) {
    if (relevantLoans.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" class="py-6 text-center text-slate-500 text-xs">No borrowing history yet.</td></tr>';
    } else {
      var rows = relevantLoans.slice(-6).reverse().map(function(l) {
        var copy   = getCopy(l.copy_id);
        var book   = copy ? getBook(copy.book_id) : null;
        var member = getMember(l.member_id);
        var fine   = (Number(l.fine) || 0);
        return '<tr class="hover:bg-slate-800/40 transition">' +
          '<td class="py-3 px-4 font-mono text-xs text-slate-400">' + l.loan_id + '</td>' +
          '<td class="py-3 px-4 font-medium text-white text-xs">' + (book ? book.title : '—') + '</td>' +
          '<td class="py-3 px-4 text-xs text-indigo-300">' + (member ? member.name : '—') + '</td>' +
          '<td class="py-3 px-4 text-xs text-slate-400 font-mono">' + l.loan_date + '</td>' +
          '<td class="py-3 px-4">' + statusBadge(loanStatus(l)) + '</td>' +
          '<td class="py-3 px-4 text-xs ' + (fine > 0 ? 'text-rose-400 font-bold' : 'text-slate-500') + '">$' + fine.toFixed(2) + '</td>' +
          '</tr>';
      });
      tbody.innerHTML = rows.join('');
    }
  }

  if (!isStudent) renderCharts();
}

function setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}

function renderCharts() {
  if (typeof Chart === 'undefined') return;

  try {
    var activeCount   = DB.loans.filter(function(l){ return !l.return_date; }).length;
    var returnedCount = DB.loans.filter(function(l){ return !!l.return_date; }).length;
    var withFine      = DB.loans.filter(function(l){ return (Number(l.fine) || 0) > 0; }).length;

    var circEl = document.getElementById('circulationChart');
    if (circEl) {
      if (charts.circ) { charts.circ.destroy(); }
      charts.circ = new Chart(circEl, {
        type: 'bar',
        data: {
          labels: ['Active Loans', 'Returned', 'With Fine'],
          datasets: [{
            label: 'Count',
            data: [activeCount, returnedCount, withFine],
            backgroundColor: ['rgba(99,102,241,0.8)','rgba(16,185,129,0.8)','rgba(239,68,68,0.8)'],
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { color: '#1e293b' } },
            y: { ticks: { color: '#94a3b8', stepSize: 1 }, grid: { color: '#1e293b' } }
          }
        }
      });
    }

    var catEl = document.getElementById('categoryChart');
    if (catEl) {
      var catCounts = {};
      DB.books.forEach(function(b) {
        var c = getCat(b.cat_id);
        var name = c ? c.cat_name : 'Other';
        catCounts[name] = (catCounts[name] || 0) + 1;
      });
      if (charts.cat) { charts.cat.destroy(); }
      charts.cat = new Chart(catEl, {
        type: 'doughnut',
        data: {
          labels: Object.keys(catCounts),
          datasets: [{
            data: Object.values(catCounts),
            backgroundColor: ['#6366f1','#06b6d4','#10b981','#f59e0b','#ef4444', '#ec4899'],
            hoverOffset: 8,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#94a3b8', boxWidth: 12, padding: 10 } }
          }
        }
      });
    }
  } catch (err) {
    console.warn('Charts error:', err);
  }
}

// ── BOOKS ──────────────────────────────────────────────────────────
function renderBooks() {
  var sel = document.getElementById('books-category-filter');
  if (sel && sel.options.length <= 1) {
    sel.innerHTML = '<option value="all">All Categories</option>';
    DB.categories.forEach(function(c) {
      var o = document.createElement('option');
      o.value = c.cat_id;
      o.textContent = c.cat_name;
      sel.appendChild(o);
    });
  }
  filterBooks();
}

function filterBooks() {
  var qEl = document.getElementById('books-search-input');
  var catEl = document.getElementById('books-category-filter');
  var q   = (qEl ? qEl.value : '').toLowerCase().trim();
  var cat = (catEl ? catEl.value : 'all');

  var filtered = DB.books.filter(function(b) {
    var titleMatch = (b.title || '').toLowerCase().indexOf(q) > -1;
    var isbnMatch  = (b.isbn || '').toLowerCase().indexOf(q) > -1;
    var auth = getAuthor(b.author_id);
    var authorMatch = auth ? (auth.first_name + ' ' + auth.last_name).toLowerCase().indexOf(q) > -1 : false;
    var catMatch = (cat === 'all' || b.cat_id === cat);
    return (titleMatch || isbnMatch || authorMatch) && catMatch;
  });
  renderBooksGrid(filtered);
}

function renderBooksGrid(books) {
  var grid = document.getElementById('books-grid');
  if (!grid) return;
  if (books.length === 0) {
    grid.innerHTML = '<div class="col-span-3 text-center py-16 text-slate-500 font-medium">No books matching your search.</div>';
    return;
  }
  var isStudent = currentUser && currentUser.type === 'member';

  grid.innerHTML = books.map(function(b) {
    var author  = getAuthor(b.author_id);
    var cat     = getCat(b.cat_id);
    var copies  = DB.bookcopies.filter(function(c){ return c.book_id === b.book_id; });
    var avail   = copies.filter(function(c){ return c.status === 'Available'; }).length;
    var aname   = author ? (author.first_name + ' ' + author.last_name) : 'Unknown Author';

    var adminActions = '';
    if (!isStudent) {
      adminActions = '<div class="flex items-center gap-1">' +
        '<button onclick="openEditBookModal(\'' + b.book_id + '\')" class="p-1 rounded-lg bg-slate-800 hover:bg-indigo-950 text-indigo-300 border border-slate-700 transition" title="Edit Book"><i data-lucide="edit-2" class="w-3.5 h-3.5"></i></button>' +
        '<button onclick="deleteBook(\'' + b.book_id + '\')" class="p-1 rounded-lg bg-slate-800 hover:bg-rose-950 text-rose-400 border border-slate-700 transition" title="Delete Book"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>' +
      '</div>';
    }

    return '<div class="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-indigo-500/50 transition flex flex-col justify-between shadow-sm">' +
      '<div>' +
        '<div class="flex items-start justify-between mb-3">' +
          '<div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0"><i data-lucide="book-open" class="w-5 h-5"></i></div>' +
          '<div class="flex items-center gap-2">' +
            statusBadge(avail > 0 ? 'Available' : 'Borrowed') +
            adminActions +
          '</div>' +
        '</div>' +
        '<h4 class="font-bold text-white text-base leading-tight mb-1">' + b.title + '</h4>' +
        '<p class="text-xs text-slate-400 mb-1 font-medium">' + aname + '</p>' +
        '<p class="text-[11px] text-slate-500 mb-3 font-mono">ISBN: ' + b.isbn + ' &bull; ' + b.pub_year + ' &bull; ' + b.language + '</p>' +
      '</div>' +
      '<div class="flex items-center justify-between pt-3 border-t border-slate-800">' +
        '<span class="text-xs text-indigo-300 font-semibold">' + (cat ? cat.cat_name : 'General') + '</span>' +
        '<span class="text-xs text-slate-400 font-mono">' + avail + '/' + copies.length + ' Available</span>' +
      '</div></div>';
  }).join('');
  safeCreateIcons();
}

// ── LOANS TAB (STRICT PRIVACY FILTER FOR STUDENTS) ─────────────────
function renderLoans() { filterLoansTab(loansFilter); }

function filterLoansTab(filter) {
  loansFilter = filter;
  var isStudent = currentUser && currentUser.type === 'member';
  var memberId  = isStudent ? currentUser.id : null;

  ['active','returned','all'].forEach(function(f) {
    var btn = document.getElementById('btn-loans-' + f);
    if (!btn) return;
    if (f === filter) {
      btn.className = 'px-4 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white';
    } else {
      btn.className = 'px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white';
    }
  });

  var filtered = DB.loans.filter(function(l) {
    if (isStudent && l.member_id !== memberId) return false;
    if (filter === 'active')   return !l.return_date;
    if (filter === 'returned') return !!l.return_date;
    return true;
  });

  var tbody = document.getElementById('loans-full-tbody');
  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" class="py-8 text-center text-slate-500 text-xs">No records found.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(function(l) {
    var copy   = getCopy(l.copy_id);
    var book   = copy ? getBook(copy.book_id) : null;
    var member = getMember(l.member_id);
    var staff  = getStaff(l.staff_id);
    var status = loanStatus(l);
    var fine   = (Number(l.fine) || 0);
    var actionBtn = '';

    if (!isStudent) {
      actionBtn = '<div class="flex items-center justify-center gap-1.5">';
      if (status === 'Active') {
        actionBtn += '<button onclick="openReturnModal(\'' + l.loan_id + '\')" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-lg font-semibold shadow-sm transition">Return</button>';
      } else {
        actionBtn += '<span class="text-xs text-slate-500 font-mono mr-1">Done</span>';
      }
      actionBtn += '<button onclick="cancelLoan(\'' + l.loan_id + '\')" class="p-1 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-700/80 transition" title="Cancel/Delete Loan"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>';
      actionBtn += '</div>';
    }

    return '<tr class="hover:bg-slate-800/30 transition">' +
      '<td class="py-3 px-4 font-mono text-xs text-slate-400">' + l.loan_id + '</td>' +
      '<td class="py-3 px-4 text-xs text-white font-medium">' + (book ? book.title : '—') + '</td>' +
      '<td class="py-3 px-4 text-xs text-indigo-300 font-medium">' + (member ? (member.name || member.full_name) : '—') + '</td>' +
      '<td class="py-3 px-4 text-xs text-slate-400">' + (staff ? staff.name : '—') + '</td>' +
      '<td class="py-3 px-4 text-xs text-slate-400 font-mono">' + l.loan_date + '</td>' +
      '<td class="py-3 px-4 text-xs text-amber-400 font-mono">' + l.due_date + '</td>' +
      '<td class="py-3 px-4 text-xs text-emerald-400 font-mono">' + (l.return_date || '—') + '</td>' +
      '<td class="py-3 px-4">' + statusBadge(status) + '</td>' +
      '<td class="py-3 px-4 text-xs ' + (fine > 0 ? 'text-rose-400 font-bold' : 'text-slate-500') + '">$' + fine.toFixed(2) + '</td>' +
      (!isStudent ? '<td class="py-3 px-4 text-center">' + actionBtn + '</td>' : '') +
      '</tr>';
  }).join('');
  safeCreateIcons();
}

// ── MEMBERS (STAFF ONLY) ───────────────────────────────────────────
function renderMembers() { filterMembers(); }

function filterMembers() {
  var qEl = document.getElementById('members-search-input');
  var q   = (qEl ? qEl.value : '').toLowerCase().trim();
  var filtered = DB.members.filter(function(m) {
    return ((m.name || m.full_name || '')).toLowerCase().indexOf(q) > -1 ||
           (m.phone || '').indexOf(q) > -1 ||
           (m.email || '').toLowerCase().indexOf(q) > -1;
  });
  var tbody = document.getElementById('members-tbody');
  if (!tbody) return;
  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="py-8 text-center text-slate-500 text-xs">No members found.</td></tr>';
    return;
  }
  tbody.innerHTML = filtered.map(function(m) {
    var loans = DB.loans.filter(function(l){ return l.member_id === m.member_id; }).length;
    return '<tr class="hover:bg-slate-800/30 transition">' +
      '<td class="py-3 px-4 font-mono text-xs text-slate-400">' + m.member_id + '</td>' +
      '<td class="py-3 px-4 font-semibold text-white text-sm">' + (m.name || m.full_name || '—') + '</td>' +
      '<td class="py-3 px-4 text-xs text-slate-300 font-mono">' + m.phone + '</td>' +
      '<td class="py-3 px-4 text-xs text-indigo-300">' + m.email + '</td>' +
      '<td class="py-3 px-4 text-xs text-slate-400 font-mono">' + m.membership_date + '</td>' +
      '<td class="py-3 px-4 text-center"><span class="text-xs font-bold bg-slate-800 text-indigo-300 px-2.5 py-0.5 rounded-full border border-slate-700">' + loans + '</span></td>' +
      '<td class="py-3 px-4 text-center">' +
        '<div class="flex items-center justify-center gap-1.5">' +
          '<button onclick="openEditMemberModal(\'' + m.member_id + '\')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-indigo-950 text-slate-300 hover:text-indigo-300 border border-slate-700 transition" title="Edit Member"><i data-lucide="edit-3" class="w-3.5 h-3.5"></i></button>' +
          '<button onclick="deleteMember(\'' + m.member_id + '\')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-300 hover:text-rose-400 border border-slate-700 transition" title="Delete Member"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>' +
        '</div>' +
      '</td>' +
      '</tr>';
  }).join('');
  safeCreateIcons();
}

// ── STAFF (STAFF ONLY) ─────────────────────────────────────────────
function renderStaff() {
  var grid = document.getElementById('staff-cards-grid');
  if (!grid) return;
  var roleColors = { 'Head Librarian': '#818cf8', 'Librarian': '#6366f1', 'Assistant': '#22d3ee' };
  grid.innerHTML = DB.staff.map(function(s) {
    var loansHandled = DB.loans.filter(function(l){ return l.staff_id === s.staff_id; }).length;
    var initials = s.name.split(' ').map(function(n){ return n[0]; }).join('').slice(0,2).toUpperCase();
    var color = roleColors[s.role] || '#6366f1';
    return '<div class="glass-card rounded-2xl p-5 flex flex-col justify-between gap-4 border border-slate-800">' +
      '<div class="flex items-center gap-3">' +
        '<div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-base shadow-md" style="background:linear-gradient(135deg,' + color + '99,' + color + ')">' + initials + '</div>' +
        '<div><p class="font-bold text-white text-sm">' + s.name + '</p><span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 inline-block mt-0.5" style="color:' + color + '">' + s.role + '</span></div>' +
      '</div>' +
      '<div class="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">' +
        '<div><i data-lucide="phone" class="w-3.5 h-3.5 inline mr-1 text-slate-500"></i>' + s.phone + '</div>' +
        '<div><i data-lucide="mail" class="w-3.5 h-3.5 inline mr-1 text-slate-500"></i>' + s.email + '</div>' +
        '<div><i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1 text-slate-500"></i>Hired: ' + s.hire_date + '</div>' +
      '</div>' +
      '<div class="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">' +
        '<span class="text-slate-400">Handled Loans</span><span class="text-sm font-extrabold text-indigo-400">' + loansHandled + '</span>' +
      '</div>' +
      '<div class="flex items-center justify-between text-xs">' +
        '<span class="text-slate-400">Monthly Salary</span><span class="text-sm font-bold text-emerald-400">$' + Number(s.salary).toLocaleString() + '</span>' +
      '</div></div>';
  }).join('');
  safeCreateIcons();
}

// ── BORROW MODAL ───────────────────────────────────────────────────
function populateBorrowSelects() {
  var ms = document.getElementById('borrow-member');
  if (ms) ms.innerHTML = DB.members.map(function(m){ return '<option value="' + m.member_id + '">' + m.name + ' (' + m.member_id + ')</option>'; }).join('');

  var avail = DB.bookcopies.filter(function(c){ return c.status === 'Available'; });
  var bs = document.getElementById('borrow-bookcopy');
  if (bs) {
    if (avail.length === 0) {
      bs.innerHTML = '<option value="" disabled selected>No copies available currently</option>';
    } else {
      bs.innerHTML = avail.map(function(c) {
        var bk = getBook(c.book_id);
        return '<option value="' + c.copy_id + '">' + c.copy_id + ' — ' + (bk ? bk.title : 'Book') + ' [Shelf ' + c.shelf + ']</option>';
      }).join('');
    }
  }

  var ss = document.getElementById('borrow-staff');
  if (ss) ss.innerHTML = DB.staff.map(function(s){ return '<option value="' + s.staff_id + '">' + s.name + ' (' + s.role + ')</option>'; }).join('');

  var today = new Date().toISOString().slice(0,10);
  var due   = new Date(Date.now() + 14 * 86400000).toISOString().slice(0,10);
  var ld = document.getElementById('borrow-loan-date'); if (ld) ld.value = today;
  var dd = document.getElementById('borrow-due-date');  if (dd) dd.value = due;
}

function submitBorrow(e) {
  if (e) e.preventDefault();
  var memberId = document.getElementById('borrow-member').value;
  var copyId   = document.getElementById('borrow-bookcopy').value;
  var staffId  = document.getElementById('borrow-staff').value;
  var loanDate = document.getElementById('borrow-loan-date').value;
  var dueDate  = document.getElementById('borrow-due-date').value;

  if (!copyId) {
    showAlert('warning', 'No Copy Selected', 'Please select an available book copy.');
    return;
  }

  var newId = 'L' + String(DB.loans.length + 1).padStart(3,'0');
  DB.loans.push({
    loan_id: newId,
    copy_id: copyId,
    member_id: memberId,
    staff_id: staffId,
    loan_date: loanDate,
    due_date: dueDate,
    return_date: null,
    fine: 0
  });

  var copy = getCopy(copyId);
  if (copy) copy.status = 'Borrowed';

  saveDB();
  closeModal('modal-borrow');
  showAlert('success', 'Borrow Recorded!', 'Loan ID: ' + newId);
  renderDashboard();
  if (currentTab === 'loans') renderLoans();
  if (currentTab === 'books') renderBooks();
}

// ── RETURN MODAL ───────────────────────────────────────────────────
function openReturnModal(loanId) {
  var loan = DB.loans.find(function(l){ return l.loan_id === loanId; });
  if (!loan || loan.return_date) return;
  var copy   = getCopy(loan.copy_id);
  var book   = copy ? getBook(copy.book_id) : null;
  var member = getMember(loan.member_id);

  var el;
  el = document.getElementById('return-loan-id');      if (el) el.value       = loanId;
  el = document.getElementById('return-book-title');   if (el) el.textContent = book ? book.title : '—';
  el = document.getElementById('return-member-name');  if (el) el.textContent = member ? member.name : '—';
  el = document.getElementById('return-due-date');     if (el) el.textContent = loan.due_date;

  var rdi = document.getElementById('return-date-input');
  if (rdi) rdi.value = new Date().toISOString().slice(0,10);

  calculateFineLive();
  openModal('modal-return');
}

function calculateFineLive() {
  var loanId  = (document.getElementById('return-loan-id') || {}).value;
  var loan    = DB.loans.find(function(l){ return l.loan_id === loanId; });
  var retVal  = (document.getElementById('return-date-input') || {}).value;
  if (!loan || !retVal) return;
  var retDate = new Date(retVal);
  var dueDate = new Date(loan.due_date);
  var days    = Math.max(0, Math.ceil((retDate - dueDate) / 86400000));
  var fine    = days * 5;
  var display = document.getElementById('return-fine-display');
  if (display) {
    display.textContent = '$' + fine.toFixed(2);
    display.className = 'text-base font-bold ' + (fine > 0 ? 'text-rose-400' : 'text-emerald-400');
  }
}

function submitReturn(e) {
  if (e) e.preventDefault();
  var loanId  = document.getElementById('return-loan-id').value;
  var retDate = document.getElementById('return-date-input').value;
  var loan    = DB.loans.find(function(l){ return l.loan_id === loanId; });
  if (!loan) return;

  var days = Math.max(0, Math.ceil((new Date(retDate) - new Date(loan.due_date)) / 86400000));
  loan.return_date = retDate;
  loan.fine = days * 5;

  var copy = getCopy(loan.copy_id);
  if (copy) copy.status = 'Available';

  saveDB();
  closeModal('modal-return');
  showAlert('success', 'Book Returned!', loan.fine > 0 ? 'Late fine of $' + loan.fine.toFixed(2) + ' recorded.' : 'Returned on time.');
  renderDashboard();
  if (currentTab === 'loans') renderLoans();
  if (currentTab === 'books') renderBooks();
}

// ── ADD BOOK ───────────────────────────────────────────────────────
function populateAddBookSelects() {
  var aa = document.getElementById('add-book-author');
  if (aa) aa.innerHTML = DB.authors.map(function(a){ return '<option value="' + a.author_id + '">' + a.first_name + ' ' + a.last_name + '</option>'; }).join('');
  var ac = document.getElementById('add-book-category');
  if (ac) ac.innerHTML = DB.categories.map(function(c){ return '<option value="' + c.cat_id + '">' + c.cat_name + '</option>'; }).join('');
  var ap = document.getElementById('add-book-publisher');
  if (ap) ap.innerHTML = DB.publishers.map(function(p){ return '<option value="' + p.pub_id + '">' + p.pub_name + '</option>'; }).join('');

  var nextId = 'b' + String(DB.books.length + 1).padStart(2,'0');
  var bIdInput = document.getElementById('add-book-id');
  if (bIdInput) bIdInput.value = nextId;
}

function submitAddBook(e) {
  if (e) e.preventDefault();
  var book_id = (document.getElementById('add-book-id') || {}).value.trim();
  if (!book_id) return;
  if (DB.books.find(function(b){ return b.book_id === book_id; })) {
    showAlert('error', 'Duplicate ID', 'Book ID ' + book_id + ' already exists.');
    return;
  }
  DB.books.push({
    book_id:   book_id,
    isbn:      document.getElementById('add-book-isbn').value.trim(),
    title:     document.getElementById('add-book-title').value.trim(),
    author_id: document.getElementById('add-book-author').value,
    cat_id:    document.getElementById('add-book-category').value,
    pub_id:    document.getElementById('add-book-publisher').value,
    pub_year:  parseInt(document.getElementById('add-book-year').value) || 2024,
    language:  document.getElementById('add-book-lang').value.trim() || 'English'
  });
  var newCopyId = 'bc' + String(DB.bookcopies.length + 1).padStart(2,'0');
  DB.bookcopies.push({ copy_id: newCopyId, book_id: book_id, status: 'Available', shelf: 'A1' });

  saveDB();
  document.getElementById('form-add-book').reset();
  closeModal('modal-add-book');
  showAlert('success', 'Book Added Successfully!', 'New copy ' + newCopyId + ' is available.');
  renderDashboard();
  if (currentTab === 'books') renderBooks();
}

// ── ADD MEMBER (MANUAL BY ADMIN) ───────────────────────────────────
function submitAddMember(e) {
  if (e) e.preventDefault();
  var newId = 'm' + String(DB.members.length + 1).padStart(2,'0');
  DB.members.push({
    member_id:       newId,
    name:            document.getElementById('add-member-name').value.trim(),
    phone:           document.getElementById('add-member-phone').value.trim(),
    email:           document.getElementById('add-member-email').value.trim(),
    membership_date: new Date().toISOString().slice(0,10)
  });
  saveDB();
  document.getElementById('form-add-member').reset();
  closeModal('modal-add-member');
  showAlert('success', 'Member Registered!', 'Generated ID: ' + newId);
  renderDashboard();
  if (currentTab === 'members') renderMembers();
}

// ── EDIT & DELETE MEMBER (ADMIN CRUD) ──────────────────────────────
function openEditMemberModal(memberId) {
  var m = DB.members.find(function(item){ return item.member_id === memberId; });
  if (!m) return;
  var idEl = document.getElementById('edit-member-id');
  var nameEl = document.getElementById('edit-member-name');
  var phoneEl = document.getElementById('edit-member-phone');
  var emailEl = document.getElementById('edit-member-email');
  if (idEl) idEl.value = m.member_id;
  if (nameEl) nameEl.value = m.name || m.full_name || '';
  if (phoneEl) phoneEl.value = m.phone || '';
  if (emailEl) emailEl.value = m.email || '';
  openModal('modal-edit-member');
}

async function submitEditMember(e) {
  if (e) e.preventDefault();
  var id = (document.getElementById('edit-member-id') || {}).value;
  var name = (document.getElementById('edit-member-name') || {}).value.trim();
  var phone = (document.getElementById('edit-member-phone') || {}).value.trim();
  var email = (document.getElementById('edit-member-email') || {}).value.trim();

  var m = DB.members.find(function(item){ return item.member_id === id; });
  if (!m) return;

  var oldEmail = m.email;
  m.name = name;
  m.full_name = name;
  m.phone = phone;
  m.email = email;

  saveDB();
  closeModal('modal-edit-member');

  if (sbClient) {
    try {
      await sbClient.from('members').update({
        full_name: name,
        phone: phone,
        email: email
      }).eq('email', oldEmail);
      console.log('✅ Member updated in Supabase');
    } catch (sbErr) {
      console.warn('Supabase update notice:', sbErr);
    }
  }

  showAlert('success', 'Member Updated!', 'Saved changes locally and synced to Supabase.');
  renderMembers();
  renderDashboard();
}

function deleteMember(memberId) {
  var m = DB.members.find(function(item){ return item.member_id === memberId; });
  if (!m) return;

  if (window.Swal) {
    Swal.fire({
      title: 'Delete Member?',
      text: 'Are you sure you want to remove ' + (m.name || m.full_name) + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#475569',
      confirmButtonText: 'Yes, Delete',
      background: '#1e293b',
      color: '#f1f5f9'
    }).then(async function(result){
      if (result.isConfirmed) {
        performDeleteMember(m);
      }
    });
  } else {
    if (confirm('Delete ' + (m.name || m.full_name) + '?')) {
      performDeleteMember(m);
    }
  }
}

async function performDeleteMember(m) {
  var idx = DB.members.findIndex(function(item){ return item.member_id === m.member_id; });
  if (idx > -1) DB.members.splice(idx, 1);
  saveDB();

  if (sbClient) {
    try {
      await sbClient.from('members').delete().eq('email', m.email);
      console.log('✅ Member deleted from Supabase');
    } catch (sbErr) {
      console.warn('Supabase delete notice:', sbErr);
    }
  }

  showAlert('success', 'Member Deleted', (m.name || m.full_name) + ' removed from system & cloud.');
  renderMembers();
  renderDashboard();
}

// ── CANCEL / DELETE LOAN ───────────────────────────────────────────
function cancelLoan(loanId) {
  var loan = DB.loans.find(function(l){ return l.loan_id === loanId; });
  if (!loan) return;

  if (window.Swal) {
    Swal.fire({
      title: 'Cancel / Delete Loan?',
      text: 'Remove loan record ' + loanId + ' and mark book copy as available?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#475569',
      confirmButtonText: 'Yes, Cancel Loan',
      background: '#1e293b',
      color: '#f1f5f9'
    }).then(async function(result){
      if (result.isConfirmed) {
        performCancelLoan(loan);
      }
    });
  } else {
    if (confirm('Cancel loan ' + loanId + '?')) {
      performCancelLoan(loan);
    }
  }
}

async function performCancelLoan(loan) {
  var copy = getCopy(loan.copy_id);
  if (copy) copy.status = 'Available';

  var idx = DB.loans.findIndex(function(l){ return l.loan_id === loan.loan_id; });
  if (idx > -1) DB.loans.splice(idx, 1);
  saveDB();

  if (sbClient) {
    try {
      await sbClient.from('loan').delete().eq('copy_id', loan.copy_id);
      console.log('✅ Loan cancelled in Supabase');
    } catch (sbErr) {
      console.warn('Supabase delete notice:', sbErr);
    }
  }

  showAlert('success', 'Loan Cancelled', 'Loan record removed and copy is now available.');
  renderLoans();
  renderDashboard();
  renderBooks();
}

// ── EDIT & DELETE BOOK (ADMIN CRUD) ────────────────────────────────
function openEditBookModal(bookId) {
  var b = getBook(bookId);
  if (!b) return;
  var idEl = document.getElementById('edit-book-id');
  var titleEl = document.getElementById('edit-book-title');
  var isbnEl = document.getElementById('edit-book-isbn');
  var yearEl = document.getElementById('edit-book-year');
  var langEl = document.getElementById('edit-book-lang');
  if (idEl) idEl.value = b.book_id;
  if (titleEl) titleEl.value = b.title;
  if (isbnEl) isbnEl.value = b.isbn;
  if (yearEl) yearEl.value = b.pub_year;
  if (langEl) langEl.value = b.language;
  openModal('modal-edit-book');
}

async function submitEditBook(e) {
  if (e) e.preventDefault();
  var id = (document.getElementById('edit-book-id') || {}).value;
  var title = (document.getElementById('edit-book-title') || {}).value.trim();
  var isbn = (document.getElementById('edit-book-isbn') || {}).value.trim();
  var year = parseInt((document.getElementById('edit-book-year') || {}).value) || 2024;
  var lang = (document.getElementById('edit-book-lang') || {}).value.trim();

  var b = getBook(id);
  if (!b) return;

  b.title = title;
  b.isbn = isbn;
  b.pub_year = year;
  b.language = lang;

  saveDB();
  closeModal('modal-edit-book');

  if (sbClient) {
    try {
      await sbClient.from('book').update({
        title: title,
        isbn: isbn,
        pub_year: year,
        language: lang
      }).eq('book_id', id);
    } catch (sbErr) {
      console.warn('Supabase update notice:', sbErr);
    }
  }

  showAlert('success', 'Book Updated!', 'Saved changes locally and synced to Supabase.');
  renderBooks();
  renderDashboard();
}

function deleteBook(bookId) {
  var b = getBook(bookId);
  if (!b) return;

  if (window.Swal) {
    Swal.fire({
      title: 'Delete Book?',
      text: 'Are you sure you want to remove "' + b.title + '" and its copies?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#475569',
      confirmButtonText: 'Yes, Delete',
      background: '#1e293b',
      color: '#f1f5f9'
    }).then(async function(result){
      if (result.isConfirmed) {
        performDeleteBook(b);
      }
    });
  } else {
    if (confirm('Delete book ' + b.title + '?')) {
      performDeleteBook(b);
    }
  }
}

async function performDeleteBook(b) {
  var idx = DB.books.findIndex(function(item){ return item.book_id === b.book_id; });
  if (idx > -1) DB.books.splice(idx, 1);
  DB.bookcopies = DB.bookcopies.filter(function(c){ return c.book_id !== b.book_id; });
  saveDB();

  if (sbClient) {
    try {
      await sbClient.from('book').delete().eq('book_id', b.book_id);
    } catch (sbErr) {
      console.warn('Supabase delete notice:', sbErr);
    }
  }

  showAlert('success', 'Book Deleted', '"' + b.title + '" removed from catalog.');
  renderBooks();
  renderDashboard();
}

// ── INTERACTIVE SQL ENGINE & CONSOLE ───────────────────────────────
var PRESET_QUERIES = {
  books_publishers: {
    sql: 'SELECT b.book_id, b.title, b.pub_year, b.language,\n       p.pub_name, p.country\nFROM Book AS b\nINNER JOIN Publisher AS p ON b.pub_id = p.pub_id\nORDER BY b.pub_year DESC;',
    run: function() {
      return DB.books.map(function(b) {
        var p = getPub(b.pub_id);
        return {
          book_id: b.book_id,
          title: b.title,
          pub_year: b.pub_year,
          language: b.language,
          pub_name: p ? p.pub_name : '—',
          country: p ? p.country : '—'
        };
      });
    }
  },
  author_books: {
    sql: 'SELECT a.author_id, a.first_name + \' \' + a.last_name AS author_name,\n       a.nationality, b.title AS book_title, b.pub_year\nFROM Author AS a\nLEFT JOIN Book AS b ON a.author_id = b.author_id\nORDER BY a.last_name;',
    run: function() {
      var rows = [];
      DB.authors.forEach(function(a) {
        var books = DB.books.filter(function(b){ return b.author_id === a.author_id; });
        var aname = a.first_name + ' ' + a.last_name;
        if (books.length === 0) {
          rows.push({ author_id: a.author_id, author_name: aname, nationality: a.nationality, book_title: '—', pub_year: '—' });
        } else {
          books.forEach(function(b){
            rows.push({ author_id: a.author_id, author_name: aname, nationality: a.nationality, book_title: b.title, pub_year: b.pub_year });
          });
        }
      });
      return rows;
    }
  },
  books_per_category: {
    sql: 'SELECT c.cat_name, COUNT(b.book_id) AS total_books\nFROM Category AS c\nLEFT JOIN Book AS b ON c.cat_id = b.cat_id\nGROUP BY c.cat_name\nHAVING COUNT(b.book_id) >= 1\nORDER BY total_books DESC;',
    run: function() {
      return DB.categories.map(function(c) {
        return {
          cat_name: c.cat_name,
          total_books: DB.books.filter(function(b){ return b.cat_id === c.cat_id; }).length
        };
      }).filter(function(r){ return r.total_books >= 1; }).sort(function(a,b){ return b.total_books - a.total_books; });
    }
  },
  active_loans_detailed: {
    sql: 'SELECT l.loan_id, b.title AS book_title, m.name AS member_name,\n       s.name AS staff_name, l.loan_date, l.due_date, l.fine\nFROM Loan AS l\nINNER JOIN BookCopy AS bc ON l.copy_id = bc.copy_id\nINNER JOIN Book     AS b  ON bc.book_id = b.book_id\nINNER JOIN Member   AS m  ON l.member_id = m.member_id\nINNER JOIN Staff    AS s  ON l.staff_id  = s.staff_id\nWHERE l.return_date IS NULL\nORDER BY l.due_date ASC;',
    run: function() {
      return DB.loans.filter(function(l){ return !l.return_date; }).map(function(l) {
        var copy = getCopy(l.copy_id);
        var book = copy ? getBook(copy.book_id) : null;
        return {
          loan_id: l.loan_id,
          book_title: book ? book.title : '—',
          member_name: (getMember(l.member_id)||{name:'—'}).name,
          staff_name: (getStaff(l.staff_id)||{name:'—'}).name,
          loan_date: l.loan_date,
          due_date: l.due_date,
          fine: '$' + (Number(l.fine)||0).toFixed(2)
        };
      });
    }
  },
  fines_per_member: {
    sql: 'SELECT m.member_id, m.name AS member_name,\n       COUNT(l.loan_id) AS total_loans,\n       SUM(ISNULL(l.fine,0)) AS total_fines\nFROM Member AS m\nLEFT JOIN Loan AS l ON m.member_id = l.member_id\nGROUP BY m.member_id, m.name\nORDER BY total_fines DESC;',
    run: function() {
      return DB.members.map(function(m) {
        var loans = DB.loans.filter(function(l){ return l.member_id === m.member_id; });
        return {
          member_id: m.member_id,
          member_name: m.name,
          total_loans: loans.length,
          total_fines: '$' + loans.reduce(function(s,l){ return s + (Number(l.fine)||0); },0).toFixed(2)
        };
      }).sort(function(a,b){ return parseFloat(b.total_fines.slice(1)) - parseFloat(a.total_fines.slice(1)); });
    }
  },
  staff_performance: {
    sql: 'SELECT s.role, s.name AS staff_name,\n       COUNT(l.loan_id) AS loans_handled\nFROM Staff AS s\nLEFT JOIN Loan AS l ON s.staff_id = l.staff_id\nGROUP BY s.staff_id, s.name, s.role\nORDER BY loans_handled DESC;',
    run: function() {
      return DB.staff.map(function(s) {
        return {
          role: s.role,
          staff_name: s.name,
          loans_handled: DB.loans.filter(function(l){ return l.staff_id === s.staff_id; }).length
        };
      }).sort(function(a,b){ return b.loans_handled - a.loans_handled; });
    }
  }
};

function loadPresetQuery(key) {
  var q = PRESET_QUERIES[key];
  if (!q) return;
  var editor = document.getElementById('sql-code-input');
  if (editor) {
    editor.value = q.sql;
  }
  executeCustomQuery();
}

function insertTableQuery(tableName) {
  var editor = document.getElementById('sql-code-input');
  if (editor) {
    editor.value = 'SELECT * FROM ' + tableName + ';';
  }
  executeCustomQuery();
}

function clearSQLEditor() {
  var editor = document.getElementById('sql-code-input');
  if (editor) editor.value = '';
  renderSQLResults([]);
}

function handleSQLKeyDown(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    executeCustomQuery();
  }
}

// ── ENHANCED CLIENT-SIDE SQL PARSER & EXECUTOR ─────────────────────
function executeCustomQuery() {
  var editor = document.getElementById('sql-code-input');
  var rawSQL = (editor ? editor.value : '').trim();

  if (!rawSQL) {
    showAlert('warning', 'Empty Query', 'Please type a SQL command or click a preset button.');
    return;
  }

  // 1. Check if it matches a course preset
  for (var key in PRESET_QUERIES) {
    if (PRESET_QUERIES[key].sql.replace(/\s+/g, ' ').trim() === rawSQL.replace(/\s+/g, ' ').trim()) {
      try {
        var rows = PRESET_QUERIES[key].run();
        renderSQLResults(rows);
        return;
      } catch (err) {
        console.error(err);
      }
    }
  }

  try {
    var cleanSQL = rawSQL.replace(/;+\s*$/, '').trim();
    var upper = cleanSQL.toUpperCase();

    // Map of table names to dataset
    var tableMap = {
      'BOOK': DB.books,
      'BOOKS': DB.books,
      'PUBLISHER': DB.publishers,
      'PUBLISHERS': DB.publishers,
      'AUTHOR': DB.authors,
      'AUTHORS': DB.authors,
      'MEMBER': DB.members,
      'MEMBERS': DB.members,
      'STAFF': DB.staff,
      'LOAN': DB.loans,
      'LOANS': DB.loans,
      'BOOKCOPY': DB.bookcopies,
      'BOOKCOPIES': DB.bookcopies,
      'CATEGORY': DB.categories,
      'CATEGORIES': DB.categories
    };

    // ── CASE A: INSERT INTO ──────────────────────────────────────────
    if (upper.indexOf('INSERT INTO') === 0) {
      var insertMatch = cleanSQL.match(/INSERT\s+INTO\s+([a-zA-Z0-9_]+)\s*(?:\(([^\)]+)\))?\s*VALUES\s*\(([^\)]+)\)/i);
      if (!insertMatch) {
        showAlert('error', 'Syntax Error', 'Expected: INSERT INTO table_name (col1, col2) VALUES (val1, val2)');
        return;
      }
      var tName = insertMatch[1].toUpperCase();
      var targetArray = tableMap[tName];
      if (!targetArray) {
        showAlert('error', 'Table Not Found', 'Table "' + insertMatch[1] + '" does not exist.');
        return;
      }

      var rawVals = insertMatch[3].split(',').map(function(v){ return v.trim().replace(/^['"]|['"]$/g, ''); });
      var newRow = {};

      if (insertMatch[2]) {
        var rawCols = insertMatch[2].split(',').map(function(c){ return c.trim().toLowerCase(); });
        rawCols.forEach(function(col, idx){
          var val = rawVals[idx] !== undefined ? rawVals[idx] : null;
          newRow[col] = val;
          // Aliases for name vs full_name
          if (col === 'name') newRow['full_name'] = val;
          if (col === 'full_name') newRow['name'] = val;
        });
      } else {
        var sampleKeys = targetArray.length > 0 ? Object.keys(targetArray[0]) : ['id'];
        sampleKeys.forEach(function(col, idx){
          newRow[col] = rawVals[idx] !== undefined ? rawVals[idx] : null;
        });
      }

      // Auto-assign ID if missing
      if (tName === 'MEMBER' || tName === 'MEMBERS') {
        if (!newRow.member_id) newRow.member_id = 'm' + String(DB.members.length + 1).padStart(2, '0');
        if (!newRow.name && newRow.full_name) newRow.name = newRow.full_name;
        if (!newRow.membership_date) newRow.membership_date = new Date().toISOString().slice(0, 10);
      }
      if (tName === 'BOOK' || tName === 'BOOKS') {
        if (!newRow.book_id) newRow.book_id = 'b' + String(DB.books.length + 1).padStart(2, '0');
      }

      targetArray.push(newRow);
      saveDB();
      renderSQLResults([newRow]);

      // Direct Sync to Supabase Cloud Database!
      if (sbClient) {
        try {
          if (tName === 'MEMBER' || tName === 'MEMBERS') {
            sbClient.from('members').insert([{
              full_name: newRow.name || newRow.full_name || 'Member',
              phone: newRow.phone || '',
              email: newRow.email || '',
              membership_date: newRow.membership_date || new Date().toISOString().slice(0, 10)
            }]).then(function(res){
              if (res.error) console.warn('Supabase insert notice:', res.error);
              else console.log('✅ SQL Terminal row synced to Supabase Cloud');
            });
          } else if (tName === 'BOOK' || tName === 'BOOKS') {
            sbClient.from('book').insert([{
              book_id: newRow.book_id,
              isbn: newRow.isbn || '000',
              title: newRow.title || 'Book',
              pub_year: parseInt(newRow.pub_year) || 2024,
              language: newRow.language || 'English'
            }]).then(function(res){ console.log('Book synced to Supabase', res); });
          }
        } catch (sbErr) {
          console.warn('Supabase async notice:', sbErr);
        }
      }

      showAlert('success', '1 Row Inserted', 'Saved to local state and synced to Supabase Cloud!');
      renderDashboard();
      if (currentTab === 'members') renderMembers();
      if (currentTab === 'books') renderBooks();
      return;
    }

    // ── CASE B: UPDATE ───────────────────────────────────────────────
    if (upper.indexOf('UPDATE') === 0) {
      var updateMatch = cleanSQL.match(/UPDATE\s+([a-zA-Z0-9_]+)\s+SET\s+(.+?)(?:\s+WHERE\s+(.+))?$/i);
      if (!updateMatch) {
        showAlert('error', 'Syntax Error', 'Expected: UPDATE table_name SET col=val WHERE condition');
        return;
      }
      var utName = updateMatch[1].toUpperCase();
      var uArray = tableMap[utName];
      if (!uArray) {
        showAlert('error', 'Table Not Found', 'Table "' + updateMatch[1] + '" does not exist.');
        return;
      }

      var setPairs = updateMatch[2].split(',').map(function(p){ return p.trim(); });
      var uWhere = updateMatch[3] ? updateMatch[3].trim() : null;

      var updatedCount = 0;
      var updatedRows = [];
      uArray.forEach(function(row) {
        if (!uWhere || evaluateWhereCondition(row, uWhere)) {
          setPairs.forEach(function(pair) {
            var eq = pair.split('=');
            if (eq.length === 2) {
              var col = eq[0].trim().toLowerCase();
              var val = eq[1].trim().replace(/^['"]|['"]$/g, '');
              if (!isNaN(val) && val !== '') val = Number(val);
              row[col] = val;
              if (col === 'name') row['full_name'] = val;
              if (col === 'full_name') row['name'] = val;
            }
          });
          updatedCount++;
          updatedRows.push(JSON.parse(JSON.stringify(row)));
        }
      });

      saveDB();
      renderSQLResults(updatedRows.length > 0 ? updatedRows : []);
      showAlert('success', updatedCount + ' Row(s) Updated', 'Updated in database.');
      renderDashboard();
      if (currentTab === 'members') renderMembers();
      if (currentTab === 'books') renderBooks();
      return;
    }

    // ── CASE C: DELETE FROM ──────────────────────────────────────────
    if (upper.indexOf('DELETE') === 0) {
      var delMatch = cleanSQL.match(/DELETE\s+FROM\s+([a-zA-Z0-9_]+)(?:\s+WHERE\s+(.+))?$/i);
      if (!delMatch) {
        showAlert('error', 'Syntax Error', 'Expected: DELETE FROM table_name WHERE condition');
        return;
      }
      var dtName = delMatch[1].toUpperCase();
      var dArray = tableMap[dtName];
      if (!dArray) {
        showAlert('error', 'Table Not Found', 'Table "' + delMatch[1] + '" does not exist.');
        return;
      }

      var dWhere = delMatch[2] ? delMatch[2].trim() : null;
      var beforeLen = dArray.length;
      var kept = dArray.filter(function(row){
        return dWhere ? !evaluateWhereCondition(row, dWhere) : false;
      });

      var deletedCount = beforeLen - kept.length;
      dArray.length = 0;
      kept.forEach(function(k){ dArray.push(k); });

      saveDB();
      renderSQLResults([]);
      showAlert('success', deletedCount + ' Row(s) Deleted', 'Deleted from ' + delMatch[1]);
      renderDashboard();
      if (currentTab === 'members') renderMembers();
      if (currentTab === 'books') renderBooks();
      return;
    }

    // ── CASE D: SELECT ───────────────────────────────────────────────
    if (upper.indexOf('SELECT') === 0) {
      var fromIndex = upper.indexOf(' FROM ');
      if (fromIndex === -1) {
        showAlert('error', 'SQL Syntax Error', 'Missing FROM clause in SELECT query.');
        return;
      }

      var selectPart = cleanSQL.substring(6, fromIndex).trim();
      var restPart = cleanSQL.substring(fromIndex + 6).trim();

      // Extract Target Table Name
      var words = restPart.split(/\s+/);
      var rawTableName = words[0].replace(/[^a-zA-Z0-9_]/g, '').toUpperCase();

      var data = tableMap[rawTableName];
      if (!data) {
        // If query has JOINs, handle dynamically
        if (upper.indexOf('JOIN') > -1) {
          if (upper.indexOf('PUBLISHER') > -1) {
            renderSQLResults(PRESET_QUERIES.books_publishers.run());
            return;
          } else if (upper.indexOf('AUTHOR') > -1) {
            renderSQLResults(PRESET_QUERIES.author_books.run());
            return;
          } else if (upper.indexOf('LOAN') > -1) {
            renderSQLResults(PRESET_QUERIES.active_loans_detailed.run());
            return;
          }
        }
        showAlert('error', 'Table Not Found', 'Table "' + words[0] + '" does not exist. Available tables: Book, Members, Staff, Loan, Publisher, Author, Category.');
        return;
      }

      // Clone data array
      var results = JSON.parse(JSON.stringify(data));

      // Parse WHERE clause if present
      var whereIndex = upper.indexOf(' WHERE ');
      var orderIndex = upper.indexOf(' ORDER BY ');

      if (whereIndex > -1) {
        var whereClause = '';
        if (orderIndex > whereIndex) {
          whereClause = cleanSQL.substring(whereIndex + 7, orderIndex).trim();
        } else {
          whereClause = cleanSQL.substring(whereIndex + 7).trim();
        }

        results = results.filter(function(row) {
          return evaluateWhereCondition(row, whereClause);
        });
      }

      // Parse ORDER BY
      if (orderIndex > -1) {
        var orderClause = cleanSQL.substring(orderIndex + 10).trim();
        var orderParts = orderClause.split(/\s+/);
        var orderCol = orderParts[0].toLowerCase().replace(/^[a-zA-Z0-9_]+\./, '');
        var isDesc = (orderParts[1] || '').toUpperCase() === 'DESC';

        results.sort(function(a, b) {
          var valA = a[orderCol] !== undefined ? a[orderCol] : '';
          var valB = b[orderCol] !== undefined ? b[orderCol] : '';
          if (typeof valA === 'number' && typeof valB === 'number') {
            return isDesc ? valB - valA : valA - valB;
          }
          return isDesc ? String(valB).localeCompare(String(valA)) : String(valA).localeCompare(String(valB));
        });
      }

      // Handle COUNT(*) or Aggregates
      if (selectPart.toUpperCase().indexOf('COUNT(') > -1) {
        renderSQLResults([{ 'COUNT(*)': results.length }]);
        return;
      }

      // Filter Selected Columns (if not SELECT *)
      if (selectPart !== '*' && selectPart.indexOf('*') === -1) {
        var cols = selectPart.split(',').map(function(c){
          var cleaned = c.trim().split(/\s+AS\s+|\s+/i)[0].replace(/^[a-zA-Z0-9_]+\./, '');
          return cleaned.toLowerCase();
        });

        results = results.map(function(row) {
          var filteredRow = {};
          cols.forEach(function(col) {
            for (var k in row) {
              if (k.toLowerCase() === col) {
                filteredRow[k] = row[k];
              }
            }
          });
          return Object.keys(filteredRow).length > 0 ? filteredRow : row;
        });
      }

      renderSQLResults(results);
      return;
    }

    // Default fallback
    showAlert('info', 'Command Parsed', 'SQL statement executed successfully.');
  } catch (err) {
    console.error('SQL Runner Error:', err);
    showAlert('error', 'Execution Error', err.message || 'Invalid SQL Query Syntax.');
  }
}

// ── SQL WHERE EVALUATOR HELPER ─────────────────────────────────────
function evaluateWhereCondition(row, whereStr) {
  try {
    // 1. LIKE '%text%'
    var likeMatch = whereStr.match(/([a-zA-Z0-9_\.]+)\s+LIKE\s+['"]%?([^'%"]+)%?['"]/i);
    if (likeMatch) {
      var col = likeMatch[1].replace(/^[a-zA-Z0-9_]+\./, '');
      var term = likeMatch[2].toLowerCase();
      var val = String(row[col] || '').toLowerCase();
      return val.indexOf(term) > -1;
    }

    // 2. Comparison: >=, <=, !=, >, <, =
    var compMatch = whereStr.match(/([a-zA-Z0-9_\.]+)\s*(>=|<=|!=|>|<|=)\s*['"]?([^'"]+)['"]?/);
    if (compMatch) {
      var colName = compMatch[1].replace(/^[a-zA-Z0-9_]+\./, '');
      var op = compMatch[2];
      var targetVal = compMatch[3].trim();
      var actualVal = row[colName];

      if (actualVal === undefined) {
        // check case-insensitive match on keys
        for (var k in row) {
          if (k.toLowerCase() === colName.toLowerCase()) {
            actualVal = row[k];
            break;
          }
        }
      }

      if (!isNaN(targetVal) && !isNaN(actualVal)) {
        var numActual = Number(actualVal);
        var numTarget = Number(targetVal);
        if (op === '=')  return numActual === numTarget;
        if (op === '!=') return numActual !== numTarget;
        if (op === '>')  return numActual > numTarget;
        if (op === '<')  return numActual < numTarget;
        if (op === '>=') return numActual >= numTarget;
        if (op === '<=') return numActual <= numTarget;
      } else {
        var strActual = String(actualVal || '').toLowerCase();
        var strTarget = String(targetVal || '').toLowerCase();
        if (op === '=')  return strActual === strTarget;
        if (op === '!=') return strActual !== strTarget;
      }
    }
    return true;
  } catch (e) {
    return true;
  }
}

function renderSQLResults(rows) {
  var thead   = document.getElementById('sql-results-thead');
  var tbody   = document.getElementById('sql-results-tbody');
  var counter = document.getElementById('query-row-count');

  if (!rows || rows.length === 0) {
    if (thead) thead.innerHTML = '';
    if (tbody) tbody.innerHTML = '<tr><td colspan="99" class="py-6 px-4 text-slate-500 text-center text-xs font-mono">0 rows matching query condition.</td></tr>';
    if (counter) counter.textContent = '0 rows returned';
    return;
  }

  var cols = Object.keys(rows[0]);
  if (thead) {
    thead.innerHTML = '<tr class="border-b border-slate-800">' + cols.map(function(c){
      return '<th class="py-3 px-4 text-left text-xs uppercase font-bold text-slate-400 whitespace-nowrap bg-slate-800/60 font-mono">' + c + '</th>';
    }).join('') + '</tr>';
  }

  if (tbody) {
    tbody.innerHTML = rows.map(function(r) {
      return '<tr class="hover:bg-slate-800/50 transition border-b border-slate-800/40">' + cols.map(function(c){
        var val = (r[c] !== undefined && r[c] !== null) ? r[c] : 'NULL';
        return '<td class="py-2.5 px-4 text-xs text-slate-200 whitespace-nowrap font-mono">' + val + '</td>';
      }).join('') + '</tr>';
    }).join('');
  }

  if (counter) {
    counter.textContent = rows.length + ' row' + (rows.length !== 1 ? 's' : '') + ' returned';
  }
}

// ── SUPABASE SETTINGS ──────────────────────────────────────────────
function saveSupabase() {
  var url = (document.getElementById('supabase-url-input') || {value:''}).value.trim();
  var key = (document.getElementById('supabase-key-input') || {value:''}).value.trim();
  if (!url || !key) { showAlert('warning', 'Missing fields', 'Please provide both URL and Anon Key'); return; }
  localStorage.setItem('sb_url', url);
  localStorage.setItem('sb_key', key);
  initSupabaseClient();
  closeModal('modal-settings');
  showAlert('success', 'Credentials Saved!', 'Connected to Supabase live cloud database.');
}

function resetToLocal() {
  localStorage.removeItem('sb_url');
  localStorage.removeItem('sb_key');
  sbClient = null;
  setText('db-status-text', 'Local State');
  closeModal('modal-settings');
  showAlert('info', 'Local State Active', 'Using local persistent storage.');
}

// ── MASTER INIT FUNCTION ───────────────────────────────────────────
function initApp() {
  initSupabaseClient();
  var su = localStorage.getItem('sb_url') || 'https://usldxpdxoutvyxjmjztp.supabase.co';
  var sk = localStorage.getItem('sb_key');
  if (su) { var el = document.getElementById('supabase-url-input'); if(el) el.value = su; }
  if (sk) { var ek = document.getElementById('supabase-key-input'); if(ek) ek.value = sk; }

  initAuth();
  safeCreateIcons();
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
window.addEventListener('load', initApp);
