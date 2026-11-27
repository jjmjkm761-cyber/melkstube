(() => {
  "use strict";

  const cfg = window.MELKSTUBE_CONFIG || {};
  const SUPPORTED = ["pt-BR", "en", "es", "fr", "de", "it", "ja", "zh", "ar", "uk"];
  const STORAGE_LANG = "melkstube_language";

  const T = {
    "pt-BR": {
      site: "MelksTube", search: "Pesquisar vídeos...",
      all: "Todos", music: "Música", entertainment: "Entretenimento",
      education: "Educação", sports: "Esportes", news: "Notícias", other: "Outros",
      login: "Entrar", signup: "Criar conta", logout: "Sair",
      account: "Minha conta", welcome: "Bem-vindo",
      upload: "Enviar vídeo", uploadTitle: "Enviar um vídeo",
      videoTitle: "Título do vídeo", description: "Descrição",
      category: "Categoria", file: "Arquivo de vídeo",
      publish: "Publicar vídeo", cancel: "Cancelar",
      email: "E-mail", password: "Senha",
      noVideos: "Nenhum vídeo encontrado.",
      loading: "Carregando vídeos...",
      errorLoad: "Erro ao carregar vídeos.",
      successUpload: "Vídeo publicado com sucesso!",
      uploading: "Enviando vídeo...",
      loginRequired: "Entre na sua conta para continuar.",
      like: "Curtir", liked: "Curtido", comments: "Comentários",
      commentPlaceholder: "Escreva um comentário...",
      commentSubmit: "Comentar", noComments: "Nenhum comentário ainda.",
      authLogin: "Entrar na conta", authSignup: "Criar conta",
      switchSignup: "Não tem conta? Cadastre-se",
      switchLogin: "Já tem conta? Entre",
      authSuccess: "Operação realizada com sucesso.",
      authError: "Não foi possível realizar a operação.",
      chooseFile: "Escolha um vídeo",
      maxSize: "Tamanho máximo: 50 MB.",
      searchEmpty: "Nenhum vídeo encontrado para sua pesquisa.",
      footer: "MelksTube — Compartilhe seus vídeos.",
      views: "visualizações", unknown: "Usuário",
      watch: "Assistir", close: "Fechar", uploadPrompt: "Compartilhe seu vídeo",
      loginPrompt: "Entre ou crie sua conta para publicar vídeos.",
      required: "Preencha todos os campos obrigatórios.",
      invalidFile: "Selecione um arquivo de vídeo válido.",
      fileTooLarge: "O vídeo deve ter no máximo 50 MB.",
      commentError: "Não foi possível enviar o comentário.",
      likeError: "Não foi possível registrar a curtida.",
      date: "Publicado",
      categories: ["Todos", "Música", "Entretenimento", "Educação", "Esportes", "Notícias", "Outros"]
    },

    en: {
      site: "MelksTube", search: "Search videos...",
      all: "All", music: "Music", entertainment: "Entertainment",
      education: "Education", sports: "Sports", news: "News", other: "Other",
      login: "Sign in", signup: "Create account", logout: "Sign out",
      account: "My account", welcome: "Welcome",
      upload: "Upload video", uploadTitle: "Upload a video",
      videoTitle: "Video title", description: "Description",
      category: "Category", file: "Video file",
      publish: "Publish video", cancel: "Cancel",
      email: "Email", password: "Password",
      noVideos: "No videos found.",
      loading: "Loading videos...",
      errorLoad: "Error loading videos.",
      successUpload: "Video published successfully!",
      uploading: "Uploading video...",
      loginRequired: "Sign in to continue.",
      like: "Like", liked: "Liked", comments: "Comments",
      commentPlaceholder: "Write a comment...",
      commentSubmit: "Comment", noComments: "No comments yet.",
      authLogin: "Sign in", authSignup: "Create account",
      switchSignup: "Don't have an account? Sign up",
      switchLogin: "Already have an account? Sign in",
      authSuccess: "Operation completed successfully.",
      authError: "Unable to complete the operation.",
      chooseFile: "Choose a video",
      maxSize: "Maximum size: 50 MB.",
      searchEmpty: "No videos found for your search.",
      footer: "MelksTube — Share your videos.",
      views: "views", unknown: "User",
      watch: "Watch", close: "Close", uploadPrompt: "Share your video",
      loginPrompt: "Sign in or create an account to upload videos.",
      required: "Fill in all required fields.",
      invalidFile: "Select a valid video file.",
      fileTooLarge: "The video must be no larger than 50 MB.",
      commentError: "Unable to post the comment.",
      likeError: "Unable to register the like.",
      date: "Published",
      categories: ["All", "Music", "Entertainment", "Education", "Sports", "News", "Other"]
    },

    es: {
      site: "MelksTube", search: "Buscar vídeos...",
      all: "Todos", music: "Música", entertainment: "Entretenimiento",
      education: "Educación", sports: "Deportes", news: "Noticias", other: "Otros",
      login: "Iniciar sesión", signup: "Crear cuenta", logout: "Cerrar sesión",
      account: "Mi cuenta", welcome: "Bienvenido",
      upload: "Subir vídeo", uploadTitle: "Subir un vídeo",
      videoTitle: "Título del vídeo", description: "Descripción",
      category: "Categoría", file: "Archivo de vídeo",
      publish: "Publicar vídeo", cancel: "Cancelar",
      email: "Correo electrónico", password: "Contraseña",
      noVideos: "No se encontraron vídeos.",
      loading: "Cargando vídeos...",
      errorLoad: "Error al cargar vídeos.",
      successUpload: "¡Vídeo publicado con éxito!",
      uploading: "Subiendo vídeo...",
      loginRequired: "Inicia sesión para continuar.",
      like: "Me gusta", liked: "Me gusta", comments: "Comentarios",
      commentPlaceholder: "Escribe un comentario...",
      commentSubmit: "Comentar", noComments: "Aún no hay comentarios.",
      authLogin: "Iniciar sesión", authSignup: "Crear cuenta",
      switchSignup: "¿No tienes cuenta? Regístrate",
      switchLogin: "¿Ya tienes cuenta? Inicia sesión",
      authSuccess: "Operación realizada con éxito.",
      authError: "No se pudo realizar la operación.",
      chooseFile: "Selecciona un vídeo",
      maxSize: "Tamaño máximo: 50 MB.",
      searchEmpty: "No se encontraron vídeos.",
      footer: "MelksTube — Comparte tus vídeos.",
      views: "visualizaciones", unknown: "Usuario",
      watch: "Ver", close: "Cerrar", uploadPrompt: "Comparte tu vídeo",
      loginPrompt: "Inicia sesión o crea una cuenta para publicar.",
      required: "Completa todos los campos obligatorios.",
      invalidFile: "Selecciona un archivo de vídeo válido.",
      fileTooLarge: "El vídeo debe tener un máximo de 50 MB.",
      commentError: "No se pudo enviar el comentario.",
      likeError: "No se pudo registrar el me gusta.",
      date: "Publicado",
      categories: ["Todos", "Música", "Entretenimiento", "Educación", "Deportes", "Noticias", "Otros"]
    },

    fr: {
      site: "MelksTube", search: "Rechercher des vidéos...",
      all: "Tout", music: "Musique", entertainment: "Divertissement",
      education: "Éducation", sports: "Sports", news: "Actualités", other: "Autres",
      login: "Connexion", signup: "Créer un compte", logout: "Déconnexion",
      account: "Mon compte", welcome: "Bienvenue",
      upload: "Téléverser", uploadTitle: "Téléverser une vidéo",
      videoTitle: "Titre de la vidéo", description: "Description",
      category: "Catégorie", file: "Fichier vidéo",
      publish: "Publier la vidéo", cancel: "Annuler",
      email: "E-mail", password: "Mot de passe",
      noVideos: "Aucune vidéo trouvée.",
      loading: "Chargement des vidéos...",
      errorLoad: "Erreur lors du chargement.",
      successUpload: "Vidéo publiée avec succès !",
      uploading: "Téléversement en cours...",
      loginRequired: "Connectez-vous pour continuer.",
      like: "J'aime", liked: "Aimé", comments: "Commentaires",
      commentPlaceholder: "Écrivez un commentaire...",
      commentSubmit: "Commenter", noComments: "Aucun commentaire.",
      authLogin: "Connexion", authSignup: "Créer un compte",
      switchSignup: "Pas de compte ? Inscrivez-vous",
      switchLogin: "Déjà un compte ? Connectez-vous",
      authSuccess: "Opération réussie.",
      authError: "Impossible de réaliser l'opération.",
      chooseFile: "Choisir une vidéo",
      maxSize: "Taille maximale : 50 Mo.",
      searchEmpty: "Aucune vidéo trouvée.",
      footer: "MelksTube — Partagez vos vidéos.",
      views: "vues", unknown: "Utilisateur",
      watch: "Regarder", close: "Fermer", uploadPrompt: "Partagez votre vidéo",
      loginPrompt: "Connectez-vous pour publier.",
      required: "Remplissez les champs obligatoires.",
      invalidFile: "Choisissez un fichier vidéo valide.",
      fileTooLarge: "La vidéo doit faire au maximum 50 Mo.",
      commentError: "Impossible d'envoyer le commentaire.",
      likeError: "Impossible d'enregistrer le like.",
      date: "Publié",
      categories: ["Tout", "Musique", "Divertissement", "Éducation", "Sports", "Actualités", "Autres"]
    },

    de: {
      site: "MelksTube", search: "Videos suchen...",
      all: "Alle", music: "Musik", entertainment: "Unterhaltung",
      education: "Bildung", sports: "Sport", news: "Nachrichten", other: "Andere",
      login: "Anmelden", signup: "Konto erstellen", logout: "Abmelden",
      account: "Mein Konto", welcome: "Willkommen",
      upload: "Video hochladen", uploadTitle: "Video hochladen",
      videoTitle: "Videotitel", description: "Beschreibung",
      category: "Kategorie", file: "Videodatei",
      publish: "Video veröffentlichen", cancel: "Abbrechen",
      email: "E-Mail", password: "Passwort",
      noVideos: "Keine Videos gefunden.",
      loading: "Videos werden geladen...",
      errorLoad: "Fehler beim Laden.",
      successUpload: "Video erfolgreich veröffentlicht!",
      uploading: "Video wird hochgeladen...",
      loginRequired: "Bitte melden Sie sich an.",
      like: "Gefällt mir", liked: "Gefällt mir", comments: "Kommentare",
      commentPlaceholder: "Kommentar schreiben...",
      commentSubmit: "Kommentieren", noComments: "Noch keine Kommentare.",
      authLogin: "Anmelden", authSignup: "Konto erstellen",
      switchSignup: "Noch kein Konto? Registrieren",
      switchLogin: "Schon ein Konto? Anmelden",
      authSuccess: "Vorgang erfolgreich.",
      authError: "Der Vorgang konnte nicht ausgeführt werden.",
      chooseFile: "Video auswählen",
      maxSize: "Maximale Größe: 50 MB.",
      searchEmpty: "Keine Videos gefunden.",
      footer: "MelksTube — Teilen Sie Ihre Videos.",
      views: "Aufrufe", unknown: "Benutzer",
      watch: "Ansehen", close: "Schließen", uploadPrompt: "Teilen Sie Ihr Video",
      loginPrompt: "Melden Sie sich an, um Videos zu veröffentlichen.",
      required: "Bitte füllen Sie alle Pflichtfelder aus.",
      invalidFile: "Wählen Sie eine gültige Videodatei.",
      fileTooLarge: "Das Video darf maximal 50 MB groß sein.",
      commentError: "Kommentar konnte nicht gesendet werden.",
      likeError: "Like konnte nicht gespeichert werden.",
      date: "Veröffentlicht",
      categories: ["Alle", "Musik", "Unterhaltung", "Bildung", "Sport", "Nachrichten", "Andere"]
    },

    it: {
      site: "MelksTube", search: "Cerca video...",
      all: "Tutti", music: "Musica", entertainment: "Intrattenimento",
      education: "Istruzione", sports: "Sport", news: "Notizie", other: "Altro",
      login: "Accedi", signup: "Crea account", logout: "Esci",
      account: "Il mio account", welcome: "Benvenuto",
      upload: "Carica video", uploadTitle: "Carica un video",
      videoTitle: "Titolo del video", description: "Descrizione",
      category: "Categoria", file: "File video",
      publish: "Pubblica video", cancel: "Annulla",
      email: "E-mail", password: "Password",
      noVideos: "Nessun video trovato.",
      loading: "Caricamento video...",
      errorLoad: "Errore nel caricamento.",
      successUpload: "Video pubblicato con successo!",
      uploading: "Caricamento in corso...",
      loginRequired: "Accedi per continuare.",
      like: "Mi piace", liked: "Piaciuto", comments: "Commenti",
      commentPlaceholder: "Scrivi un commento...",
      commentSubmit: "Commenta", noComments: "Ancora nessun commento.",
      authLogin: "Accedi", authSignup: "Crea account",
      switchSignup: "Non hai un account? Registrati",
      switchLogin: "Hai già un account? Accedi",
      authSuccess: "Operazione completata.",
      authError: "Impossibile completare l'operazione.",
      chooseFile: "Scegli un video",
      maxSize: "Dimensione massima: 50 MB.",
      searchEmpty: "Nessun video trovato.",
      footer: "MelksTube — Condividi i tuoi video.",
      views: "visualizzazioni", unknown: "Utente",
      watch: "Guarda", close: "Chiudi", uploadPrompt: "Condividi il tuo video",
      loginPrompt: "Accedi per pubblicare video.",
      required: "Compila tutti i campi obbligatori.",
      invalidFile: "Seleziona un file video valido.",
      fileTooLarge: "Il video deve essere massimo 50 MB.",
      commentError: "Impossibile inviare il commento.",
      likeError: "Impossibile registrare il like.",
      date: "Pubblicato",
      categories: ["Tutti", "Musica", "Intrattenimento", "Istruzione", "Sport", "Notizie", "Altro"]
    },

    ja: {
      site: "MelksTube", search: "動画を検索...",
      all: "すべて", music: "音楽", entertainment: "エンターテインメント",
      education: "教育", sports: "スポーツ", news: "ニュース", other: "その他",
      login: "ログイン", signup: "アカウント作成", logout: "ログアウト",
      account: "マイアカウント", welcome: "ようこそ",
      upload: "動画をアップロード", uploadTitle: "動画をアップロード",
      videoTitle: "動画タイトル", description: "説明",
      category: "カテゴリー", file: "動画ファイル",
      publish: "動画を公開", cancel: "キャンセル",
      email: "メール", password: "パスワード",
      noVideos: "動画が見つかりません。",
      loading: "動画を読み込み中...",
      errorLoad: "動画の読み込みエラー。",
      successUpload: "動画を公開しました！",
      uploading: "アップロード中...",
      loginRequired: "続行するにはログインしてください。",
      like: "いいね", liked: "いいね済み", comments: "コメント",
      commentPlaceholder: "コメントを書く...",
      commentSubmit: "コメント", noComments: "コメントはまだありません。",
      authLogin: "ログイン", authSignup: "アカウント作成",
      switchSignup: "アカウントがありませんか？登録",
      switchLogin: "アカウントをお持ちですか？ログイン",
      authSuccess: "操作が完了しました。",
      authError: "操作を完了できません。",
      chooseFile: "動画を選択",
      maxSize: "最大サイズ: 50 MB。",
      searchEmpty: "検索結果がありません。",
      footer: "MelksTube — 動画を共有しましょう。",
      views: "再生回数", unknown: "ユーザー",
      watch: "視聴", close: "閉じる", uploadPrompt: "動画を共有",
      loginPrompt: "動画を投稿するにはログインしてください。",
      required: "必須項目を入力してください。",
      invalidFile: "有効な動画ファイルを選択してください。",
      fileTooLarge: "動画は50 MB以下にしてください。",
      commentError: "コメントを送信できません。",
      likeError: "いいねを登録できません。",
      date: "公開",
      categories: ["すべて", "音楽", "エンターテインメント", "教育", "スポーツ", "ニュース", "その他"]
    },

    zh: {
      site: "MelksTube", search: "搜索视频...",
      all: "全部", music: "音乐", entertainment: "娱乐",
      education: "教育", sports: "体育", news: "新闻", other: "其他",
      login: "登录", signup: "创建账户", logout: "退出",
      account: "我的账户", welcome: "欢迎",
      upload: "上传视频", uploadTitle: "上传视频",
      videoTitle: "视频标题", description: "描述",
      category: "类别", file: "视频文件",
      publish: "发布视频", cancel: "取消",
      email: "电子邮件", password: "密码",
      noVideos: "未找到视频。",
      loading: "正在加载视频...",
      errorLoad: "加载视频失败。",
      successUpload: "视频发布成功！",
      uploading: "正在上传...",
      loginRequired: "请登录后继续。",
      like: "点赞", liked: "已点赞", comments: "评论",
      commentPlaceholder: "写评论...",
      commentSubmit: "评论", noComments: "暂无评论。",
      authLogin: "登录", authSignup: "创建账户",
      switchSignup: "没有账户？注册",
      switchLogin: "已有账户？登录",
      authSuccess: "操作成功。",
      authError: "无法完成操作。",
      chooseFile: "选择视频",
      maxSize: "最大大小：50 MB。",
      searchEmpty: "没有找到相关视频。",
      footer: "MelksTube — 分享您的视频。",
      views: "观看次数", unknown: "用户",
      watch: "观看", close: "关闭", uploadPrompt: "分享您的视频",
      loginPrompt: "登录或创建账户以发布视频。",
      required: "请填写所有必填字段。",
      invalidFile: "请选择有效的视频文件。",
      fileTooLarge: "视频最大为50 MB。",
      commentError: "无法发送评论。",
      likeError: "无法记录点赞。",
      date: "发布",
      categories: ["全部", "音乐", "娱乐", "教育", "体育", "新闻", "其他"]
    },

    ar: {
      site: "MelksTube", search: "ابحث عن فيديو...",
      all: "الكل", music: "الموسيقى", entertainment: "الترفيه",
      education: "التعليم", sports: "الرياضة", news: "الأخبار", other: "أخرى",
      login: "تسجيل الدخول", signup: "إنشاء حساب", logout: "تسجيل الخروج",
      account: "حسابي", welcome: "مرحبًا",
      upload: "رفع فيديو", uploadTitle: "رفع فيديو",
      videoTitle: "عنوان الفيديو", description: "الوصف",
      category: "الفئة", file: "ملف الفيديو",
      publish: "نشر الفيديو", cancel: "إلغاء",
      email: "البريد الإلكتروني", password: "كلمة المرور",
      noVideos: "لم يتم العثور على فيديوهات.",
      loading: "جارٍ تحميل الفيديوهات...",
      errorLoad: "خطأ في تحميل الفيديوهات.",
      successUpload: "تم نشر الفيديو بنجاح!",
      uploading: "جارٍ رفع الفيديو...",
      loginRequired: "سجّل الدخول للمتابعة.",
      like: "إعجاب", liked: "تم الإعجاب", comments: "التعليقات",
      commentPlaceholder: "اكتب تعليقًا...",
      commentSubmit: "تعليق", noComments: "لا توجد تعليقات بعد.",
      authLogin: "تسجيل الدخول", authSignup: "إنشاء حساب",
      switchSignup: "ليس لديك حساب؟ سجّل",
      switchLogin: "لديك حساب؟ سجّل الدخول",
      authSuccess: "تمت العملية بنجاح.",
      authError: "تعذّر إكمال العملية.",
      chooseFile: "اختر فيديو",
      maxSize: "الحد الأقصى: 50 ميجابايت.",
      searchEmpty: "لم يتم العثور على فيديوهات.",
      footer: "MelksTube — شارك فيديوهاتك.",
      views: "مشاهدات", unknown: "مستخدم",
      watch: "مشاهدة", close: "إغلاق", uploadPrompt: "شارك فيديوك",
      loginPrompt: "سجّل الدخول لنشر الفيديوهات.",
      required: "املأ جميع الحقول المطلوبة.",
      invalidFile: "اختر ملف فيديو صالحًا.",
      fileTooLarge: "يجب ألا يتجاوز الفيديو 50 ميجابايت.",
      commentError: "تعذّر إرسال التعليق.",
      likeError: "تعذّر تسجيل الإعجاب.",
      date: "نُشر",
      categories: ["الكل", "الموسيقى", "الترفيه", "التعليم", "الرياضة", "الأخبار", "أخرى"]
    },

    uk: {
      site: "MelksTube", search: "Пошук відео...",
      all: "Усі", music: "Музика", entertainment: "Розваги",
      education: "Освіта", sports: "Спорт", news: "Новини", other: "Інше",
      login: "Увійти", signup: "Створити акаунт", logout: "Вийти",
      account: "Мій акаунт", welcome: "Вітаємо",
      upload: "Завантажити відео", uploadTitle: "Завантажити відео",
      videoTitle: "Назва відео", description: "Опис",
      category: "Категорія", file: "Відеофайл",
      publish: "Опублікувати відео", cancel: "Скасувати",
      email: "Електронна пошта", password: "Пароль",
      noVideos: "Відео не знайдено.",
      loading: "Завантаження відео...",
      errorLoad: "Помилка завантаження відео.",
      successUpload: "Відео успішно опубліковано!",
      uploading: "Завантаження...",
      loginRequired: "Увійдіть, щоб продовжити.",
      like: "Подобається", liked: "Вподобано", comments: "Коментарі",
      commentPlaceholder: "Напишіть коментар...",
      commentSubmit: "Коментувати", noComments: "Коментарів ще немає.",
      authLogin: "Увійти", authSignup: "Створити акаунт",
      switchSignup: "Немає акаунта? Зареєструватися",
      switchLogin: "Вже є акаунт? Увійти",
      authSuccess: "Операцію виконано успішно.",
      authError: "Не вдалося виконати операцію.",
      chooseFile: "Вибрати відео",
      maxSize: "Максимальний розмір: 50 МБ.",
      searchEmpty: "Відео не знайдено.",
      footer: "MelksTube — Діліться своїми відео.",
      views: "переглядів", unknown: "Користувач",
      watch: "Переглянути", close: "Закрити", uploadPrompt: "Поділіться відео",
      loginPrompt: "Увійдіть, щоб публікувати відео.",
      required: "Заповніть усі обов'язкові поля.",
      invalidFile: "Виберіть дійсний відеофайл.",
      fileTooLarge: "Відео має бути не більше 50 МБ.",
      commentError: "Не вдалося надіслати коментар.",
      likeError: "Не вдалося зареєструвати вподобання.",
      date: "Опубліковано",
      categories: ["Усі", "Музика", "Розваги", "Освіта", "Спорт", "Новини", "Інше"]
    }
  };

  const originalCategories = [
    "Todos", "Música", "Entretenimento", "Educação",
    "Esportes", "Notícias", "Outros"
  ];

  const categoryKeys = [
    "all", "music", "entertainment", "education",
    "sports", "news", "other"
  ];

  let lang = "pt-BR";
  let client = null;
  let user = null;
  let authMode = "login";
  let activeCategory = "Todos";
  let videos = [];
  let currentVideo = null;

  // =========================================================
  // ÁUDIO / DUBLAGEM MULTILÍNGUE
  // =========================================================
  let currentAudioTracks = [];
  let audioSyncTimer = null;

  const $ = id => document.getElementById(id);
  const tr = key => T[lang][key] || T["pt-BR"][key] || key;

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;",
      '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function toast(msg) {
    const el = $("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 3000);
  }

  function modal(id, show = true) {
    const el = $(id);
    if (!el) return;
    el.classList.toggle("hidden", !show);
    el.style.display = show ? "" : "none";
  }

  function status(id, msg) {
    const el = $(id);
    if (el) el.textContent = msg || "";
  }

  function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (SUPPORTED.includes(saved)) return saved;

    const browserLangs = navigator.languages || [navigator.language || "pt-BR"];

    for (const browserLang of browserLangs) {
      const code = String(browserLang).toLowerCase();

      if (code.startsWith("pt")) return "pt-BR";
      if (code.startsWith("en")) return "en";
      if (code.startsWith("es")) return "es";
      if (code.startsWith("fr")) return "fr";
      if (code.startsWith("de")) return "de";
      if (code.startsWith("it")) return "it";
      if (code.startsWith("ja")) return "ja";
      if (code.startsWith("zh")) return "zh";
      if (code.startsWith("ar")) return "ar";
      if (code.startsWith("uk") || code.startsWith("ua")) return "uk";
    }

    return "pt-BR";
  }

  function applyLanguage(newLang) {
    if (!SUPPORTED.includes(newLang)) newLang = "pt-BR";

    lang = newLang;
    localStorage.setItem(STORAGE_LANG, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    const select = $("languageSelect");
    if (select) select.value = lang;

    translateStatic();
    renderVideos();
    showAccount();

    if (currentVideo) {
      updateWatchLanguage();
      loadEngagement(currentVideo.id);
    }
  }

  function translateStatic() {
    const dictionary = T[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dictionary[key]) el.textContent = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dictionary[key]) el.placeholder = dictionary[key];
    });

    const search = $("searchInput");
    if (search) search.placeholder = tr("search");

    const commentInput = $("commentInput");
    if (commentInput) commentInput.placeholder = tr("commentPlaceholder");

    const email = $("authEmail");
    if (email) email.placeholder = tr("email");

    const password = $("authPassword");
    if (password) password.placeholder = tr("password");

    const title = $("videoTitle");
    if (title) title.placeholder = tr("videoTitle");

    const description = $("videoDescription");
    if (description) description.placeholder = tr("description");

    translateCategories();

    const year = $("year");
    if (year) year.textContent = new Date().getFullYear();

    updateAuthLabels();
    updateUploadLabels();
  }

  function translateCategories() {
    document.querySelectorAll(".chip").forEach(chip => {
      const original = chip.dataset.category || chip.textContent.trim();
      const index = originalCategories.indexOf(original);

      if (index >= 0) {
        chip.textContent = tr(categoryKeys[index]);
      }
    });

    const select = $("videoCategory");
    if (select) {
      Array.from(select.options).forEach(option => {
        const index = originalCategories.indexOf(option.value);
        if (index >= 0) option.textContent = tr(categoryKeys[index]);
      });
    }
  }

  function updateAuthLabels() {
    const title = $("authTitle");
    const submit = $("authSubmit");
    const switchText = $("authSwitch");
    const switchButton = $("switchAuth");

    if (title) title.textContent = authMode === "login" ? tr("authLogin") : tr("authSignup");
    if (submit) submit.textContent = authMode === "login" ? tr("login") : tr("signup");

    if (switchText) {
      switchText.textContent = authMode === "login" ? tr("switchSignup") : tr("switchLogin");
    }

    if (switchButton) {
      switchButton.textContent = authMode === "login" ? tr("signup") : tr("login");
    }
  }

  function updateUploadLabels() {
    const button = $("publishBtn");
    if (button) button.textContent = tr("publish");
  }

  function userLabel() {
    return user?.email || tr("unknown");
  }

  function showAccount() {
    const area = $("accountArea");
    if (!area) return;

    if (user) {
      area.innerHTML = `
        <span class="account-label">${esc(userLabel())}</span>
        <button id="logoutBtn" class="outline" type="button">${esc(tr("logout"))}</button>
      `;
      $("logoutBtn")?.addEventListener("click", logout);
    } else {
      area.innerHTML = `
        <button class="outline" id="loginBtn" type="button">${esc(tr("login"))}</button>
        <button class="primary" id="signupBtn" type="button">${esc(tr("signup"))}</button>
      `;
      $("loginBtn")?.addEventListener("click", () => openAuth("login"));
      $("signupBtn")?.addEventListener("click", () => openAuth("signup"));
    }
  }

  function openAuth(mode = "login") {
    authMode = mode;
    updateAuthLabels();
    status("authMessage", "");
    modal("authModal", true);
    modal("watchModal", false);
  }

  async function logout() {
    if (!client) return;
    const { error } = await client.auth.signOut();
    if (error) toast(error.message);
  }

  async function authSubmit(e) {
    e?.preventDefault();

    const email = $("authEmail")?.value.trim();
    const password = $("authPassword")?.value;

    if (!email || !password) {
      status("authMessage", tr("required"));
      return;
    }

    const button = $("authSubmit");
    if (button) button.disabled = true;

    let result;

    try {
      result = authMode === "login"
        ? await client.auth.signInWithPassword({ email, password })
        : await client.auth.signUp({ email, password });

      if (result.error) {
        status("authMessage", result.error.message);
      } else {
        status("authMessage", tr("authSuccess"));
        modal("authModal", false);
      }
    } catch (error) {
      status("authMessage", error.message || tr("authError"));
    } finally {
      if (button) button.disabled = false;
    }
  }

  async function loadFeed() {
    status("feedStatus", tr("loading"));

    try {
      const { data, error } = await client
        .from("videos")
        .select("*")
        .eq("visibility", "public")
        .order("created_at", { ascending: false })
        .limit(60);

      if (error) throw error;

      videos = data || [];
      renderVideos();
      status("feedStatus", videos.length ? "" : tr("noVideos"));
    } catch (error) {
      status("feedStatus", tr("errorLoad"));
      console.error(error);
    }
  }

  function localizedCategory(category) {
    const index = originalCategories.indexOf(category);
    return index >= 0 ? tr(categoryKeys[index]) : category;
  }

  function renderVideos() {
    const grid = $("videoGrid");
    if (!grid) return;

    const search = $("searchInput")?.value.trim().toLowerCase() || "";

    let filtered = videos.filter(video => {
      const categoryMatches =
        activeCategory === "Todos" || video.category === activeCategory;

      const searchMatches =
        !search ||
        (video.title || "").toLowerCase().includes(search) ||
        (video.description || "").toLowerCase().includes(search);

      return categoryMatches && searchMatches;
    });

    if (!filtered.length) {
      grid.innerHTML = "";
      status("feedStatus", tr("searchEmpty"));
      return;
    }

    status("feedStatus", "");

    grid.innerHTML = filtered.map(video => {
      const date = video.created_at
        ? new Intl.DateTimeFormat(lang, { dateStyle: "medium" })
            .format(new Date(video.created_at))
        : "";

      let thumbnail = video.thumbnail_url || "";

      return `
        <article class="video-card" data-video-id="${esc(video.id)}">
          <div class="video-thumb" data-watch="${esc(video.id)}">
            ${
              thumbnail
                ? `<img src="${esc(thumbnail)}" alt="" loading="lazy">`
                : `<div class="video-placeholder">▶</div>`
            }
          </div>
          <div class="video-card-info">
            <h3 data-watch="${esc(video.id)}">${esc(video.title || "")}</h3>
            <p>${esc(video.user_email || video.author || tr("unknown"))}</p>
            <div class="video-meta">
              <span>${esc(localizedCategory(video.category || "Outros"))}</span>
              <span>${esc(date)}</span>
            </div>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll("[data-watch]").forEach(el => {
      el.addEventListener("click", () => watch(el.dataset.watch));
    });
  }


  function stopDubAudio() {
    const audio = $("dubAudio");
    if (!audio) return;

    audio.pause();
    audio.removeAttribute("src");
    audio.load();

    if (audioSyncTimer) {
      clearInterval(audioSyncTimer);
      audioSyncTimer = null;
    }
  }

  function resetAudioLanguage() {
    const select = $("audioLanguageSelect");
    const statusEl = $("audioStatus");
    const player = $("watchVideo");

    currentAudioTracks = [];
    stopDubAudio();

    if (player) player.muted = false;

    if (select) {
      select.innerHTML = '<option value="original">🇧🇷 Original</option>';
      select.value = "original";
    }

    if (statusEl) {
      statusEl.textContent = "Áudio original";
    }
  }

  async function loadAudioTracks(videoId) {
    const select = $("audioLanguageSelect");
    if (!select || !client || !videoId) return;

    resetAudioLanguage();

    try {
      const { data, error } = await client
        .from("video_audio_tracks")
        .select("id,video_id,language,label,flag,storage_path,status")
        .eq("video_id", videoId)
        .eq("status", "ready")
        .order("language");

      if (error) throw error;

      currentAudioTracks = Array.isArray(data) ? data : [];

      const labels = {
        "pt-BR": "🇧🇷 Português",
        "en": "🇺🇸 English",
        "es": "🇪🇸 Español",
        "fr": "🇫🇷 Français",
        "de": "🇩🇪 Deutsch",
        "it": "🇮🇹 Italiano",
        "ja": "🇯🇵 日本語",
        "zh": "🇨🇳 中文",
        "ar": "🇸🇦 العربية",
        "uk": "🇺🇦 Українська"
      };

      for (const track of currentAudioTracks) {
        if (!track?.language || !track?.storage_path) continue;

        const option = document.createElement("option");
        option.value = track.language;

        const fallbackLabel =
          labels[track.language] ||
          `🎧 ${track.language}`;

        option.textContent =
          track.flag && track.label
            ? `${track.flag} ${track.label}`
            : track.label || fallbackLabel;

        select.appendChild(option);
      }
    } catch (error) {
      // A tabela ainda pode não existir durante a primeira instalação.
      // Nesse caso, o vídeo continua funcionando normalmente.
      console.warn("Faixas de áudio não disponíveis:", error);
      currentAudioTracks = [];
    }
  }

  function syncDubAudio(force = false) {
    const player = $("watchVideo");
    const audio = $("dubAudio");

    if (!player || !audio || !audio.src) return;

    const difference =
      Math.abs((audio.currentTime || 0) - (player.currentTime || 0));

    if (force || difference > 0.20) {
      try {
        audio.currentTime = player.currentTime;
      } catch (error) {
        console.warn("Não foi possível sincronizar a dublagem:", error);
      }
    }

    audio.playbackRate = player.playbackRate || 1;
  }

  async function selectAudioLanguage(language) {
    const player = $("watchVideo");
    const audio = $("dubAudio");
    const statusEl = $("audioStatus");

    if (!player || !audio) return;

    if (language === "original") {
      stopDubAudio();
      player.muted = false;

      if (statusEl) statusEl.textContent = "Áudio original";
      return;
    }

    const track = currentAudioTracks.find(
      item => item.language === language
    );

    if (!track) {
      player.muted = false;

      const select = $("audioLanguageSelect");
      if (select) select.value = "original";

      if (statusEl) {
        statusEl.textContent =
          "Esta dublagem ainda não está disponível";
      }

      return;
    }

    try {
      const { data } = client.storage
        .from("audio")
        .getPublicUrl(track.storage_path);

      const publicUrl = data?.publicUrl;

      if (!publicUrl) {
        throw new Error("URL pública da faixa de áudio não encontrada.");
      }

      const wasPlaying = !player.paused;

      audio.pause();
      audio.src = publicUrl;
      audio.load();
      audio.currentTime = player.currentTime;
      audio.playbackRate = player.playbackRate || 1;

      // O vídeo permanece visível, mas seu áudio original fica mudo.
      player.muted = true;

      if (statusEl) {
        statusEl.textContent =
          `Dublado em ${track.label || track.language}`;
      }

      if (audioSyncTimer) clearInterval(audioSyncTimer);

      audioSyncTimer = setInterval(() => {
        if (!player.paused && !audio.paused) {
          syncDubAudio(false);
        }
      }, 500);

      if (wasPlaying) {
        await audio.play();
      }
    } catch (error) {
      console.error("Erro ao carregar a dublagem:", error);

      stopDubAudio();
      player.muted = false;

      const select = $("audioLanguageSelect");
      if (select) select.value = "original";

      if (statusEl) {
        statusEl.textContent = "Erro ao carregar a dublagem";
      }
    }
  }

  function setupAudioPlayerEvents() {
    const player = $("watchVideo");
    const audio = $("dubAudio");
    const select = $("audioLanguageSelect");

    if (!player || !audio || !select) return;

    select.addEventListener("change", async event => {
      await selectAudioLanguage(event.target.value);
    });

    player.addEventListener("play", async () => {
      if (select.value === "original" || !audio.src) return;

      syncDubAudio(true);

      try {
        await audio.play();
      } catch (error) {
        console.warn("Não foi possível iniciar a dublagem:", error);
      }
    });

    player.addEventListener("pause", () => {
      if (!audio.paused) audio.pause();
    });

    player.addEventListener("seeking", () => {
      if (select.value !== "original" && audio.src) {
        syncDubAudio(true);
      }
    });

    player.addEventListener("ratechange", () => {
      if (audio.src) {
        audio.playbackRate = player.playbackRate || 1;
      }
    });

    player.addEventListener("ended", () => {
      audio.pause();
      try {
        audio.currentTime = 0;
      } catch (_) {}
    });

    audio.addEventListener("ended", () => {
      // Se a faixa acabar antes do vídeo, ela simplesmente para.
      // O vídeo continua visível e o usuário pode trocar de faixa.
    });
  }

  async function watch(id) {
    const video = videos.find(v => String(v.id) === String(id));
    if (!video) return;

    currentVideo = video;

    const player = $("watchVideo");
    if (!player) return;

    const { data } = client.storage
      .from("videos")
      .getPublicUrl(video.storage_path);

    player.src = data.publicUrl;
    player.load();

    await loadAudioTracks(video.id);

    const title = $("watchTitle");
    if (title) title.textContent = video.title || "";

    const description = $("watchDescription");
    if (description) description.textContent = video.description || "";

    const author = $("watchAuthor");
    if (author) author.textContent = video.user_email || video.author || tr("unknown");

    modal("watchModal", true);

    await loadEngagement(video.id);
  }

  function updateWatchLanguage() {
    const likeBtn = $("likeBtn");
    if (likeBtn) {
      likeBtn.title = tr("like");
    }
  }

  async function loadEngagement(videoId) {
    if (!client) return;

    const likeCount = $("likeCount");
    const likeBtn = $("likeBtn");

    try {
      const { count, error } = await client
        .from("video_likes")
        .select("*", { count: "exact", head: true })
        .eq("video_id", videoId);

      if (!error && likeCount) likeCount.textContent = count ?? 0;
    } catch (e) {
      console.error(e);
    }

    if (likeBtn) {
      likeBtn.textContent = tr("like");
      likeBtn.disabled = !user;
    }

    if (user) {
      try {
        const { data } = await client
          .from("video_likes")
          .select("id")
          .eq("video_id", videoId)
          .eq("user_id", user.id)
          .maybeSingle();

        if (data && likeBtn) likeBtn.textContent = tr("liked");
      } catch (e) {
        console.error(e);
      }
    }

    await loadComments(videoId);
  }

  async function loadComments(videoId) {
    const list = $("commentList");
    if (!list) return;

    list.innerHTML = "";

    try {
      const { data, error } = await client
        .from("comments")
        .select("*")
        .eq("video_id", videoId)
        .order("created_at", { ascending: true });

      if (error) throw error;

      if (!data?.length) {
        list.innerHTML = `<p>${esc(tr("noComments"))}</p>`;
        return;
      }

      list.innerHTML = data.map(comment => `
        <div class="comment-item">
          <strong>${esc(comment.user_email || comment.author || tr("unknown"))}</strong>
          <p>${esc(comment.content || comment.comment || "")}</p>
        </div>
      `).join("");
    } catch (e) {
      console.error(e);
    }
  }

  async function like() {
    if (!requireLogin()) return;
    if (!currentVideo) return;

    const videoId = currentVideo.id;

    try {
      const { data: existing } = await client
        .from("video_likes")
        .select("id")
        .eq("video_id", videoId)
        .eq("user_id", user.id)
        .maybeSingle();

      if (existing) {
        await client
          .from("video_likes")
          .delete()
          .eq("video_id", videoId)
          .eq("user_id", user.id);
      } else {
        const { error } = await client
          .from("video_likes")
          .insert({ video_id: videoId, user_id: user.id });

        if (error) throw error;
      }

      await loadEngagement(videoId);
    } catch (error) {
      toast(error.message || tr("likeError"));
    }
  }

  async function comment(e) {
    e?.preventDefault();

    if (!requireLogin()) return;
    if (!currentVideo) return;

    const input = $("commentInput");
    const content = input?.value.trim();

    if (!content) return;

    try {
      const { error } = await client.from("comments").insert({
        video_id: currentVideo.id,
        user_id: user.id,
        content
      });

      if (error) throw error;

      input.value = "";
      await loadComments(currentVideo.id);
    } catch (error) {
      toast(error.message || tr("commentError"));
    }
  }

  function requireLogin() {
    if (!user) {
      openAuth("login");
      toast(tr("loginRequired"));
      return false;
    }
    return true;
  }

  function getSelectedDubbingLanguages() {
    return Array.from(document.querySelectorAll('input[name="dubLanguages"]:checked'))
      .map(input => input.value)
      .filter(code => SUPPORTED.includes(code) && code !== "pt-BR");
  }

  function openUpload() {
    if (!requireLogin()) return;

    status("uploadMessage", "");
    const choices = document.querySelectorAll('input[name="dubLanguages"]');
    choices.forEach(input => { input.checked = false; });
    modal("uploadModal", true);
  }

  async function upload(e) {
    e?.preventDefault();

    if (!requireLogin()) return;

    const title = $("videoTitle")?.value.trim();
    const description = $("videoDescription")?.value.trim() || "";
    const category = $("videoCategory")?.value || "Outros";
    const file = $("videoFile")?.files?.[0];

    if (!title || !file) {
      status("uploadMessage", tr("required"));
      return;
    }

    if (!file.type.startsWith("video/")) {
      status("uploadMessage", tr("invalidFile"));
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      status("uploadMessage", tr("fileTooLarge"));
      return;
    }

    const button = $("publishBtn");
    if (button) button.disabled = true;

    status("uploadMessage", tr("uploading"));

    try {
      const ext = file.name.split(".").pop() || "mp4";
      const path = `${user.id}/${crypto.randomUUID()}.${ext}`;

      const { error: storageError } = await client.storage
        .from("videos")
        .upload(path, file, {
          cacheControl: "3600",
          upsert: false
        });

      if (storageError) throw storageError;

      const { data: createdVideo, error: insertError } = await client
        .from("videos")
        .insert({
          title,
          description,
          category,
          storage_path: path,
          user_id: user.id,
          visibility: "public"
        })
        .select("id")
        .single();

      if (insertError) throw insertError;

      const selectedLanguages = getSelectedDubbingLanguages();
      let dubbingNotice = "";

      if (selectedLanguages.length) {
        const jobs = selectedLanguages.map(target_language => ({
          video_id: createdVideo.id,
          user_id: user.id,
          target_language,
          status: "pending"
        }));

        const { error: jobsError } = await client
          .from("video_dubbing_jobs")
          .insert(jobs);

        if (jobsError) {
          console.error("Vídeo publicado, mas não foi possível registrar as dublagens:", jobsError);
          dubbingNotice = " O vídeo foi publicado, mas os pedidos de dublagem não foram registrados. Configure a tabela video_dubbing_jobs no Supabase.";
        } else {
          dubbingNotice = ` ${selectedLanguages.length} idioma(s) selecionado(s); pedidos registrados como pendentes.`;
        }
      }

      toast(tr("successUpload") + dubbingNotice);
      modal("uploadModal", false);

      $("uploadForm")?.reset();
      await loadFeed();
    } catch (error) {
      status("uploadMessage", error.message || tr("authError"));
      console.error(error);
    } finally {
      if (button) button.disabled = false;
    }
  }

  function init() {
    if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
      console.error("Supabase configuration missing.");
      status("feedStatus", "Supabase configuration missing.");
      return;
    }

    if (!window.supabase) {
      console.error("Supabase library not loaded.");
      status("feedStatus", "Supabase library not loaded.");
      return;
    }

    client = window.supabase.createClient(
      cfg.SUPABASE_URL,
      cfg.SUPABASE_ANON_KEY
    );

    $("loginBtn")?.addEventListener("click", () => openAuth("login"));
    $("signupBtn")?.addEventListener("click", () => openAuth("signup"));

    $("authForm")?.addEventListener("submit", authSubmit);

    $("switchAuth")?.addEventListener("click", () => {
      authMode = authMode === "login" ? "signup" : "login";
      updateAuthLabels();
      status("authMessage", "");
    });

    $("heroUpload")?.addEventListener("click", openUpload);
    $("uploadCta")?.addEventListener("click", openUpload);

    $("uploadForm")?.addEventListener("submit", upload);

    $("likeBtn")?.addEventListener("click", like);
    $("commentForm")?.addEventListener("submit", comment);

    $("searchBtn")?.addEventListener("click", renderVideos);
    $("searchInput")?.addEventListener("input", renderVideos);

    document.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".chip").forEach(c => c.classList.remove("selected"));
        chip.classList.add("selected");
        activeCategory = chip.dataset.category || "Todos";
        renderVideos();
      });
    });

    document.querySelectorAll("[data-close]").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.dataset.close;
        modal(id, false);

        if (id === "watchModal") {
          const player = $("watchVideo");
          if (player) {
            player.pause();
            player.muted = false;
            player.removeAttribute("src");
            player.load();
          }

          resetAudioLanguage();
          currentVideo = null;
        }
      });
    });

    $("languageSelect")?.addEventListener("change", e => {
      applyLanguage(e.target.value);
    });

    setupAudioPlayerEvents();

    client.auth.onAuthStateChange((_event, session) => {
      user = session?.user || null;
      showAccount();
      loadFeed();
    });

    client.auth.getSession().then(({ data }) => {
      user = data.session?.user || null;
      showAccount();
      loadFeed();
    });

    applyLanguage(detectLanguage());
  }

  init();
})();
