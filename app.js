(() => {
  "use strict";

  const cfg = window.MELKSTUBE_CONFIG || {};
  const configured =
    cfg.SUPABASE_URL &&
    !cfg.SUPABASE_URL.startsWith("COLE_") &&
    cfg.SUPABASE_ANON_KEY &&
    !cfg.SUPABASE_ANON_KEY.startsWith("COLE_");

  const client =
    configured && window.supabase
      ? window.supabase.createClient(
          cfg.SUPABASE_URL,
          cfg.SUPABASE_ANON_KEY
        )
      : null;

  let user = null;
  let category = "Todos";
  let videos = [];
  let activeVideo = null;
  let authMode = "login";
  let language = "pt-BR";

  const $ = id => document.getElementById(id);

  const LANGUAGES = {
    "pt-BR": {
      dir: "ltr",
      name: "Português",
      strings: {
        search: "Pesquisar vídeos...",
        searchAria: "Pesquisar vídeos",
        login: "Entrar",
        signup: "Criar conta",
        signup2: "Criar minha conta",
        logout: "Sair",
        greeting: "Olá",
        heroEyebrow: "SEU ESPAÇO DE VÍDEOS",
        heroTitle: "O que vamos assistir",
        today: "hoje?",
        heroText: "Descubra novos conteúdos, compartilhe suas ideias e faça parte da comunidade MelksTube.",
        publish: "Publicar vídeo",
        watchShare: "ASSISTA • COMPARTILHE • DESCUBRA",
        categories: ["Todos", "Música", "Entretenimento", "Educação", "Esportes", "Notícias", "Outros"],
        community: "COMUNIDADE",
        recent: "Vídeos recentes",
        connecting: "Conectando...",
        loading: "Carregando vídeos...",
        yourTurn: "É A SUA VEZ",
        shareTitle: "Tem um vídeo para compartilhar?",
        shareText: "Crie sua conta gratuitamente e publique seu conteúdo na comunidade.",
        sendVideo: "Enviar meu vídeo",
        footer: "MelksTube. Compartilhe com responsabilidade.",
        welcome: "BEM-VINDO AO MELKSTUBE",
        email: "E-mail",
        password: "Senha",
        noAccount: "Ainda não tem conta?",
        haveAccount: "Já tem uma conta?",
        shareContent: "COMPARTILHE SEU CONTEÚDO",
        uploadTitle: "Publicar vídeo",
        title: "Título",
        titlePlaceholder: "Dê um título ao seu vídeo",
        description: "Descrição",
        descriptionPlaceholder: "Sobre o que é este vídeo?",
        category: "Categoria",
        file: "Arquivo de vídeo",
        hint: "Limite de 50 MB por vídeo. Prefira MP4 (H.264/AAC).",
        sendPublish: "Enviar e publicar",
        like: "Curtir",
        comments: "Comentários",
        commentPlaceholder: "Escreva um comentário...",
        send: "Enviar",
        member: "Membro",
        publishedBy: "Publicado por",
        you: "você",
        empty: "Ainda não há vídeos publicados nesta categoria. Seja o primeiro a compartilhar!",
        configure: "Configure o Supabase para ativar",
        configureText: "O site está preparado. Para ativar o feed público, cadastros e uploads, configure o Supabase.",
        count: "vídeo(s)",
        waiting: "Aguarde...",
        confirmEmail: "Cadastro realizado. Verifique seu e-mail para confirmar a conta.",
        loginSuccess: "Login realizado!",
        signupSuccess: "Conta criada!",
        loggedOut: "Você saiu da sua conta.",
        loginRequired: "Entre ou crie uma conta para continuar.",
        configureFirst: "Configure o Supabase primeiro.",
        fileTooBig: "O arquivo ultrapassa 50 MB. Reduza o tamanho do vídeo.",
        invalidFile: "Selecione um arquivo de vídeo válido.",
        uploading: "Enviando vídeo...",
        videoPublished: "Vídeo publicado!",
        alreadyPublished: "Seu vídeo já está no MelksTube!",
        noVideos: "Ainda não há vídeos publicados.",
        feedError: "Erro ao carregar",
        authError: "Não foi possível realizar a operação.",
        language: "Escolher idioma",
        memberCommunity: "membro da comunidade",
        noComments: "Ainda não há comentários."
      }
    },

    en: {
      dir: "ltr",
      name: "English",
      strings: {
        search: "Search videos...",
        searchAria: "Search videos",
        login: "Log in",
        signup: "Create account",
        signup2: "Create my account",
        logout: "Log out",
        greeting: "Hello",
        heroEyebrow: "YOUR VIDEO SPACE",
        heroTitle: "What shall we watch",
        today: "today?",
        heroText: "Discover new content, share your ideas and join the MelksTube community.",
        publish: "Upload video",
        watchShare: "WATCH • SHARE • DISCOVER",
        categories: ["All", "Music", "Entertainment", "Education", "Sports", "News", "Other"],
        community: "COMMUNITY",
        recent: "Recent videos",
        connecting: "Connecting...",
        loading: "Loading videos...",
        yourTurn: "YOUR TURN",
        shareTitle: "Have a video to share?",
        shareText: "Create a free account and publish your content in the community.",
        sendVideo: "Upload my video",
        footer: "MelksTube. Share responsibly.",
        welcome: "WELCOME TO MELKSTUBE",
        email: "Email",
        password: "Password",
        noAccount: "Don't have an account?",
        haveAccount: "Already have an account?",
        shareContent: "SHARE YOUR CONTENT",
        uploadTitle: "Upload video",
        title: "Title",
        titlePlaceholder: "Enter a video title",
        description: "Description",
        descriptionPlaceholder: "What is this video about?",
        category: "Category",
        file: "Video file",
        hint: "Maximum 50 MB per video. Prefer MP4 (H.264/AAC).",
        sendPublish: "Upload and publish",
        like: "Like",
        comments: "Comments",
        commentPlaceholder: "Write a comment...",
        send: "Send",
        member: "Member",
        publishedBy: "Published by",
        you: "you",
        empty: "No videos in this category yet. Be the first to share!",
        configure: "Configure Supabase to activate",
        configureText: "The site is ready. Configure Supabase to activate the public feed, registration and uploads.",
        count: "video(s)",
        waiting: "Please wait...",
        confirmEmail: "Registration complete. Check your email to confirm your account.",
        loginSuccess: "Logged in!",
        signupSuccess: "Account created!",
        loggedOut: "You have logged out.",
        loginRequired: "Log in or create an account to continue.",
        configureFirst: "Configure Supabase first.",
        fileTooBig: "The file exceeds 50 MB. Please reduce its size.",
        invalidFile: "Select a valid video file.",
        uploading: "Uploading video...",
        videoPublished: "Video published!",
        alreadyPublished: "Your video is now on MelksTube!",
        noVideos: "No videos have been published yet.",
        feedError: "Loading error",
        authError: "The operation could not be completed.",
        language: "Choose language",
        memberCommunity: "community member",
        noComments: "No comments yet."
      }
    },

    es: {
      dir: "ltr",
      name: "Español",
      strings: {
        search: "Buscar vídeos...",
        searchAria: "Buscar vídeos",
        login: "Iniciar sesión",
        signup: "Crear cuenta",
        signup2: "Crear mi cuenta",
        logout: "Cerrar sesión",
        greeting: "Hola",
        heroEyebrow: "TU ESPACIO DE VÍDEOS",
        heroTitle: "¿Qué vamos a ver",
        today: "hoy?",
        heroText: "Descubre contenido nuevo, comparte tus ideas y forma parte de la comunidad MelksTube.",
        publish: "Publicar vídeo",
        watchShare: "MIRA • COMPARTE • DESCUBRE",
        categories: ["Todos", "Música", "Entretenimiento", "Educación", "Deportes", "Noticias", "Otros"],
        community: "COMUNIDAD",
        recent: "Vídeos recientes",
        connecting: "Conectando...",
        loading: "Cargando vídeos...",
        yourTurn: "ES TU TURNO",
        shareTitle: "¿Tienes un vídeo para compartir?",
        shareText: "Crea una cuenta gratis y publica tu contenido en la comunidad.",
        sendVideo: "Enviar mi vídeo",
        footer: "MelksTube. Comparte con responsabilidad.",
        welcome: "BIENVENIDO A MELKSTUBE",
        email: "Correo electrónico",
        password: "Contraseña",
        noAccount: "¿No tienes cuenta?",
        haveAccount: "¿Ya tienes cuenta?",
        shareContent: "COMPARTE TU CONTENIDO",
        uploadTitle: "Publicar vídeo",
        title: "Título",
        titlePlaceholder: "Escribe el título del vídeo",
        description: "Descripción",
        descriptionPlaceholder: "¿De qué trata este vídeo?",
        category: "Categoría",
        file: "Archivo de vídeo",
        hint: "Máximo 50 MB por vídeo. Preferiblemente MP4 (H.264/AAC).",
        sendPublish: "Enviar y publicar",
        like: "Me gusta",
        comments: "Comentarios",
        commentPlaceholder: "Escribe un comentario...",
        send: "Enviar",
        member: "Miembro",
        publishedBy: "Publicado por",
        you: "ti",
        empty: "Todavía no hay vídeos en esta categoría. ¡Sé el primero en compartir!",
        configure: "Configura Supabase para activar",
        configureText: "El sitio está preparado. Configura Supabase para activar el feed, registros y publicaciones.",
        count: "vídeo(s)",
        waiting: "Espera...",
        confirmEmail: "Registro realizado. Revisa tu correo para confirmar tu cuenta.",
        loginSuccess: "¡Sesión iniciada!",
        signupSuccess: "¡Cuenta creada!",
        loggedOut: "Has cerrado sesión.",
        loginRequired: "Inicia sesión o crea una cuenta para continuar.",
        configureFirst: "Configura Supabase primero.",
        fileTooBig: "El archivo supera los 50 MB. Reduce su tamaño.",
        invalidFile: "Selecciona un archivo de vídeo válido.",
        uploading: "Subiendo vídeo...",
        videoPublished: "¡Vídeo publicado!",
        alreadyPublished: "¡Tu vídeo ya está en MelksTube!",
        noVideos: "Todavía no se han publicado vídeos.",
        feedError: "Error al cargar",
        authError: "No se pudo completar la operación.",
        language: "Elegir idioma",
        memberCommunity: "miembro de la comunidad",
        noComments: "Todavía no hay comentarios."
      }
    },

    fr: {
      dir: "ltr",
      name: "Français",
      strings: {
        search: "Rechercher des vidéos...",
        searchAria: "Rechercher des vidéos",
        login: "Connexion",
        signup: "Créer un compte",
        signup2: "Créer mon compte",
        logout: "Déconnexion",
        greeting: "Bonjour",
        heroEyebrow: "VOTRE ESPACE VIDÉO",
        heroTitle: "Que regarder",
        today: "aujourd'hui ?",
        heroText: "Découvrez de nouveaux contenus, partagez vos idées et rejoignez la communauté MelksTube.",
        publish: "Publier une vidéo",
        watchShare: "REGARDER • PARTAGER • DÉCOUVRIR",
        categories: ["Tous", "Musique", "Divertissement", "Éducation", "Sports", "Actualités", "Autres"],
        community: "COMMUNAUTÉ",
        recent: "Vidéos récentes",
        connecting: "Connexion...",
        loading: "Chargement des vidéos...",
        yourTurn: "À VOUS",
        shareTitle: "Vous avez une vidéo à partager ?",
        shareText: "Créez un compte gratuit et publiez votre contenu.",
        sendVideo: "Envoyer ma vidéo",
        footer: "MelksTube. Partagez de manière responsable.",
        welcome: "BIENVENUE SUR MELKSTUBE",
        email: "E-mail",
        password: "Mot de passe",
        noAccount: "Pas encore de compte ?",
        haveAccount: "Vous avez déjà un compte ?",
        shareContent: "PARTAGEZ VOTRE CONTENU",
        uploadTitle: "Publier une vidéo",
        title: "Titre",
        titlePlaceholder: "Donnez un titre à votre vidéo",
        description: "Description",
        descriptionPlaceholder: "De quoi parle cette vidéo ?",
        category: "Catégorie",
        file: "Fichier vidéo",
        hint: "Maximum 50 Mo par vidéo. Préférez MP4 (H.264/AAC).",
        sendPublish: "Envoyer et publier",
        like: "J'aime",
        comments: "Commentaires",
        commentPlaceholder: "Écrivez un commentaire...",
        send: "Envoyer",
        member: "Membre",
        publishedBy: "Publié par",
        you: "vous",
        empty: "Aucune vidéo dans cette catégorie. Soyez le premier à partager !",
        configure: "Configurez Supabase pour activer",
        configureText: "Le site est prêt. Configurez Supabase pour activer le flux, les inscriptions et les vidéos.",
        count: "vidéo(s)",
        waiting: "Veuillez patienter...",
        confirmEmail: "Inscription réussie. Vérifiez votre e-mail.",
        loginSuccess: "Connexion réussie !",
        signupSuccess: "Compte créé !",
        loggedOut: "Vous êtes déconnecté.",
        loginRequired: "Connectez-vous ou créez un compte.",
        configureFirst: "Configurez Supabase d'abord.",
        fileTooBig: "Le fichier dépasse 50 Mo.",
        invalidFile: "Sélectionnez un fichier vidéo valide.",
        uploading: "Envoi de la vidéo...",
        videoPublished: "Vidéo publiée !",
        alreadyPublished: "Votre vidéo est sur MelksTube !",
        noVideos: "Aucune vidéo publiée.",
        feedError: "Erreur de chargement",
        authError: "Impossible de terminer l'opération.",
        language: "Choisir la langue",
        memberCommunity: "membre de la communauté",
        noComments: "Aucun commentaire."
      }
    },

    de: {
      dir: "ltr",
      name: "Deutsch",
      strings: {
        search: "Videos suchen...",
        searchAria: "Videos suchen",
        login: "Anmelden",
        signup: "Konto erstellen",
        signup2: "Mein Konto erstellen",
        logout: "Abmelden",
        greeting: "Hallo",
        heroEyebrow: "DEIN VIDEO-BEREICH",
        heroTitle: "Was schauen wir",
        today: "heute?",
        heroText: "Entdecke neue Inhalte, teile deine Ideen und werde Teil der MelksTube-Community.",
        publish: "Video veröffentlichen",
        watchShare: "ANSEHEN • TEILEN • ENTDECKEN",
        categories: ["Alle", "Musik", "Unterhaltung", "Bildung", "Sport", "Nachrichten", "Andere"],
        community: "COMMUNITY",
        recent: "Neueste Videos",
        connecting: "Verbinden...",
        loading: "Videos werden geladen...",
        yourTurn: "DU BIST DRAN",
        shareTitle: "Hast du ein Video zum Teilen?",
        shareText: "Erstelle ein kostenloses Konto und veröffentliche deine Inhalte.",
        sendVideo: "Mein Video senden",
        footer: "MelksTube. Teile verantwortungsvoll.",
        welcome: "WILLKOMMEN BEI MELKSTUBE",
        email: "E-Mail",
        password: "Passwort",
        noAccount: "Noch kein Konto?",
        haveAccount: "Du hast bereits ein Konto?",
        shareContent: "TEILE DEINE INHALTE",
        uploadTitle: "Video veröffentlichen",
        title: "Titel",
        titlePlaceholder: "Gib deinem Video einen Titel",
        description: "Beschreibung",
        descriptionPlaceholder: "Worum geht es in diesem Video?",
        category: "Kategorie",
        file: "Videodatei",
        hint: "Maximal 50 MB pro Video. MP4 (H.264/AAC) bevorzugen.",
        sendPublish: "Senden und veröffentlichen",
        like: "Gefällt mir",
        comments: "Kommentare",
        commentPlaceholder: "Schreibe einen Kommentar...",
        send: "Senden",
        member: "Mitglied",
        publishedBy: "Veröffentlicht von",
        you: "dir",
        empty: "Noch keine Videos in dieser Kategorie. Sei der Erste!",
        configure: "Supabase konfigurieren",
        configureText: "Die Website ist bereit. Konfiguriere Supabase für Feed, Registrierung und Uploads.",
        count: "Video(s)",
        waiting: "Bitte warten...",
        confirmEmail: "Registrierung abgeschlossen. Bestätige deine E-Mail.",
        loginSuccess: "Anmeldung erfolgreich!",
        signupSuccess: "Konto erstellt!",
        loggedOut: "Du hast dich abgemeldet.",
        loginRequired: "Melde dich an oder erstelle ein Konto.",
        configureFirst: "Konfiguriere zuerst Supabase.",
        fileTooBig: "Die Datei ist größer als 50 MB.",
        invalidFile: "Wähle eine gültige Videodatei.",
        uploading: "Video wird hochgeladen...",
        videoPublished: "Video veröffentlicht!",
        alreadyPublished: "Dein Video ist jetzt auf MelksTube!",
        noVideos: "Noch keine Videos veröffentlicht.",
        feedError: "Ladefehler",
        authError: "Der Vorgang konnte nicht abgeschlossen werden.",
        language: "Sprache wählen",
        memberCommunity: "Community-Mitglied",
        noComments: "Noch keine Kommentare."
      }
    },

    it: {
      dir: "ltr",
      name: "Italiano",
      strings: {
        search: "Cerca video...",
        searchAria: "Cerca video",
        login: "Accedi",
        signup: "Crea account",
        signup2: "Crea il mio account",
        logout: "Esci",
        greeting: "Ciao",
        heroEyebrow: "IL TUO SPAZIO VIDEO",
        heroTitle: "Cosa guardiamo",
        today: "oggi?",
        heroText: "Scopri nuovi contenuti, condividi le tue idee e unisciti alla comunità MelksTube.",
        publish: "Pubblica video",
        watchShare: "GUARDA • CONDIVIDI • SCOPRI",
        categories: ["Tutti", "Musica", "Intrattenimento", "Istruzione", "Sport", "Notizie", "Altro"],
        community: "COMUNITÀ",
        recent: "Video recenti",
        connecting: "Connessione...",
        loading: "Caricamento video...",
        yourTurn: "TOCCA A TE",
        shareTitle: "Hai un video da condividere?",
        shareText: "Crea un account gratuito e pubblica i tuoi contenuti.",
        sendVideo: "Invia il mio video",
        footer: "MelksTube. Condividi responsabilmente.",
        welcome: "BENVENUTO SU MELKSTUBE",
        email: "E-mail",
        password: "Password",
        noAccount: "Non hai un account?",
        haveAccount: "Hai già un account?",
        shareContent: "CONDIVIDI I TUOI CONTENUTI",
        uploadTitle: "Pubblica video",
        title: "Titolo",
        titlePlaceholder: "Inserisci il titolo del video",
        description: "Descrizione",
        descriptionPlaceholder: "Di cosa parla questo video?",
        category: "Categoria",
        file: "File video",
        hint: "Massimo 50 MB per video. Preferisci MP4 (H.264/AAC).",
        sendPublish: "Invia e pubblica",
        like: "Mi piace",
        comments: "Commenti",
        commentPlaceholder: "Scrivi un commento...",
        send: "Invia",
        member: "Membro",
        publishedBy: "Pubblicato da",
        you: "te",
        empty: "Non ci sono video in questa categoria. Sii il primo!",
        configure: "Configura Supabase",
        configureText: "Il sito è pronto. Configura Supabase per attivare feed, registrazioni e upload.",
        count: "video",
        waiting: "Attendere...",
        confirmEmail: "Registrazione completata. Controlla la tua e-mail.",
        loginSuccess: "Accesso riuscito!",
        signupSuccess: "Account creato!",
        loggedOut: "Hai effettuato la disconnessione.",
        loginRequired: "Accedi o crea un account.",
        configureFirst: "Configura prima Supabase.",
        fileTooBig: "Il file supera i 50 MB.",
        invalidFile: "Seleziona un file video valido.",
        uploading: "Caricamento video...",
        videoPublished: "Video pubblicato!",
        alreadyPublished: "Il tuo video è su MelksTube!",
        noVideos: "Non sono ancora stati pubblicati video.",
        feedError: "Errore di caricamento",
        authError: "Operazione non riuscita.",
        language: "Scegli lingua",
        memberCommunity: "membro della comunità",
        noComments: "Nessun commento."
      }
    },

    ja: {
      dir: "ltr",
      name: "日本語",
      strings: {
        search: "動画を検索...",
        searchAria: "動画を検索",
        login: "ログイン",
        signup: "アカウント作成",
        signup2: "アカウントを作成",
        logout: "ログアウト",
        greeting: "こんにちは",
        heroEyebrow: "あなたの動画スペース",
        heroTitle: "今日は何を見ますか",
        today: "？",
        heroText: "新しいコンテンツを発見し、アイデアを共有してMelksTubeコミュニティに参加しましょう。",
        publish: "動画を投稿",
        watchShare: "見る • 共有 • 発見",
        categories: ["すべて", "音楽", "エンターテインメント", "教育", "スポーツ", "ニュース", "その他"],
        community: "コミュニティ",
        recent: "最近の動画",
        connecting: "接続中...",
        loading: "動画を読み込み中...",
        yourTurn: "あなたの番です",
        shareTitle: "共有する動画がありますか？",
        shareText: "無料アカウントを作成してコンテンツを投稿しましょう。",
        sendVideo: "動画を送信",
        footer: "MelksTube. 責任を持って共有しましょう。",
        welcome: "MELKSTUBEへようこそ",
        email: "メール",
        password: "パスワード",
        noAccount: "アカウントをお持ちでないですか？",
        haveAccount: "すでにアカウントをお持ちですか？",
        shareContent: "コンテンツを共有",
        uploadTitle: "動画を投稿",
        title: "タイトル",
        titlePlaceholder: "動画のタイトル",
        description: "説明",
        descriptionPlaceholder: "動画について説明してください",
        category: "カテゴリー",
        file: "動画ファイル",
        hint: "動画は最大50MBです。MP4 (H.264/AAC) 推奨。",
        sendPublish: "送信して公開",
        like: "いいね",
        comments: "コメント",
        commentPlaceholder: "コメントを書く...",
        send: "送信",
        member: "メンバー",
        publishedBy: "投稿者",
        you: "あなた",
        empty: "このカテゴリーには動画がありません。最初に投稿しましょう！",
        configure: "Supabaseを設定してください",
        configureText: "サイトの準備ができています。Supabaseを設定すると動画、登録、投稿が有効になります。",
        count: "動画",
        waiting: "お待ちください...",
        confirmEmail: "登録完了。メールを確認してください。",
        loginSuccess: "ログインしました！",
        signupSuccess: "アカウントを作成しました！",
        loggedOut: "ログアウトしました。",
        loginRequired: "ログインまたはアカウントを作成してください。",
        configureFirst: "先にSupabaseを設定してください。",
        fileTooBig: "ファイルが50MBを超えています。",
        invalidFile: "有効な動画ファイルを選択してください。",
        uploading: "動画をアップロード中...",
        videoPublished: "動画を公開しました！",
        alreadyPublished: "動画がMelksTubeに公開されました！",
        noVideos: "まだ動画がありません。",
        feedError: "読み込みエラー",
        authError: "操作を完了できませんでした。",
        language: "言語を選択",
        memberCommunity: "コミュニティメンバー",
        noComments: "コメントはまだありません。"
      }
    },

    zh: {
      dir: "ltr",
      name: "中文",
      strings: {
        search: "搜索视频...",
        searchAria: "搜索视频",
        login: "登录",
        signup: "创建账户",
        signup2: "创建我的账户",
        logout: "退出",
        greeting: "你好",
        heroEyebrow: "你的视频空间",
        heroTitle: "今天看什么",
        today: "？",
        heroText: "发现新内容，分享你的想法，加入MelksTube社区。",
        publish: "发布视频",
        watchShare: "观看 • 分享 • 发现",
        categories: ["全部", "音乐", "娱乐", "教育", "体育", "新闻", "其他"],
        community: "社区",
        recent: "最新视频",
        connecting: "连接中...",
        loading: "正在加载视频...",
        yourTurn: "轮到你了",
        shareTitle: "有视频想分享吗？",
        shareText: "免费创建账户并发布你的内容。",
        sendVideo: "上传我的视频",
        footer: "MelksTube. 请负责任地分享。",
        welcome: "欢迎来到MELKSTUBE",
        email: "电子邮件",
        password: "密码",
        noAccount: "还没有账户？",
        haveAccount: "已有账户？",
        shareContent: "分享你的内容",
        uploadTitle: "发布视频",
        title: "标题",
        titlePlaceholder: "输入视频标题",
        description: "描述",
        descriptionPlaceholder: "视频内容是什么？",
        category: "类别",
        file: "视频文件",
        hint: "每个视频最大50MB。建议使用MP4 (H.264/AAC)。",
        sendPublish: "上传并发布",
        like: "点赞",
        comments: "评论",
        commentPlaceholder: "写评论...",
        send: "发送",
        member: "成员",
        publishedBy: "发布者",
        you: "你",
        empty: "此类别暂无视频。成为第一个分享的人吧！",
        configure: "配置Supabase",
        configureText: "网站已准备好。配置Supabase以启用视频、注册和上传。",
        count: "个视频",
        waiting: "请稍候...",
        confirmEmail: "注册完成。请检查邮箱确认账户。",
        loginSuccess: "登录成功！",
        signupSuccess: "账户创建成功！",
        loggedOut: "已退出登录。",
        loginRequired: "请登录或创建账户。",
        configureFirst: "请先配置Supabase。",
        fileTooBig: "文件超过50MB。",
        invalidFile: "请选择有效的视频文件。",
        uploading: "正在上传视频...",
        videoPublished: "视频已发布！",
        alreadyPublished: "你的视频已发布到MelksTube！",
        noVideos: "尚未发布视频。",
        feedError: "加载错误",
        authError: "操作无法完成。",
        language: "选择语言",
        memberCommunity: "社区成员",
        noComments: "暂无评论。"
      }
    },

    ar: {
      dir: "rtl",
      name: "العربية",
      strings: {
        search: "ابحث عن فيديوهات...",
        searchAria: "ابحث عن فيديوهات",
        login: "تسجيل الدخول",
        signup: "إنشاء حساب",
        signup2: "إنشاء حسابي",
        logout: "تسجيل الخروج",
        greeting: "مرحباً",
        heroEyebrow: "مساحة الفيديو الخاصة بك",
        heroTitle: "ماذا سنشاهد",
        today: "اليوم؟",
        heroText: "اكتشف محتوى جديداً وشارك أفكارك وانضم إلى مجتمع MelksTube.",
        publish: "نشر فيديو",
        watchShare: "شاهد • شارك • اكتشف",
        categories: ["الكل", "موسيقى", "ترفيه", "تعليم", "رياضة", "أخبار", "أخرى"],
        community: "المجتمع",
        recent: "الفيديوهات الأخيرة",
        connecting: "جارٍ الاتصال...",
        loading: "جارٍ تحميل الفيديوهات...",
        yourTurn: "دورك",
        shareTitle: "هل لديك فيديو تريد مشاركته؟",
        shareText: "أنشئ حساباً مجانياً وانشر محتواك في المجتمع.",
        sendVideo: "إرسال الفيديو",
        footer: "MelksTube. شارك بمسؤولية.",
        welcome: "مرحباً بك في MELKSTUBE",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        noAccount: "ليس لديك حساب؟",
        haveAccount: "لديك حساب بالفعل؟",
        shareContent: "شارك محتواك",
        uploadTitle: "نشر فيديو",
        title: "العنوان",
        titlePlaceholder: "اكتب عنوان الفيديو",
        description: "الوصف",
        descriptionPlaceholder: "عن ماذا يتحدث الفيديو؟",
        category: "الفئة",
        file: "ملف الفيديو",
        hint: "الحد الأقصى 50 ميجابايت. يفضل MP4 (H.264/AAC).",
        sendPublish: "إرسال ونشر",
        like: "إعجاب",
        comments: "التعليقات",
        commentPlaceholder: "اكتب تعليقاً...",
        send: "إرسال",
        member: "عضو",
        publishedBy: "نشر بواسطة",
        you: "أنت",
        empty: "لا توجد فيديوهات في هذه الفئة بعد. كن أول من يشارك!",
        configure: "قم بإعداد Supabase",
        configureText: "الموقع جاهز. قم بإعداد Supabase لتفعيل الفيديوهات والتسجيل والرفع.",
        count: "فيديو",
        waiting: "يرجى الانتظار...",
        confirmEmail: "تم التسجيل. تحقق من بريدك الإلكتروني.",
        loginSuccess: "تم تسجيل الدخول!",
        signupSuccess: "تم إنشاء الحساب!",
        loggedOut: "تم تسجيل الخروج.",
        loginRequired: "سجل الدخول أو أنشئ حساباً للمتابعة.",
        configureFirst: "قم بإعداد Supabase أولاً.",
        fileTooBig: "حجم الملف يتجاوز 50 ميجابايت.",
        invalidFile: "اختر ملف فيديو صالحاً.",
        uploading: "جارٍ رفع الفيديو...",
        videoPublished: "تم نشر الفيديو!",
        alreadyPublished: "فيديوك الآن على MelksTube!",
        noVideos: "لم يتم نشر فيديوهات بعد.",
        feedError: "خطأ في التحميل",
        authError: "تعذر إكمال العملية.",
        language: "اختيار اللغة",
        memberCommunity: "عضو في المجتمع",
        noComments: "لا توجد تعليقات بعد."
      }
    },

    uk: {
      dir: "ltr",
      name: "Українська",
      strings: {
        search: "Пошук відео...",
        searchAria: "Пошук відео",
        login: "Увійти",
        signup: "Створити акаунт",
        signup2: "Створити мій акаунт",
        logout: "Вийти",
        greeting: "Привіт",
        heroEyebrow: "ВАШ ВІДЕОПРОСТІР",
        heroTitle: "Що будемо дивитися",
        today: "сьогодні?",
        heroText: "Відкривайте новий контент, діліться ідеями та приєднуйтесь до спільноти MelksTube.",
        publish: "Опублікувати відео",
        watchShare: "ДИВИТИСЯ • ДІЛИТИСЯ • ВІДКРИВАТИ",
        categories: ["Усі", "Музика", "Розваги", "Освіта", "Спорт", "Новини", "Інше"],
        community: "СПІЛЬНОТА",
        recent: "Останні відео",
        connecting: "Підключення...",
        loading: "Завантаження відео...",
        yourTurn: "ВАША ЧЕРГА",
        shareTitle: "Є відео, яким хочете поділитися?",
        shareText: "Створіть безкоштовний акаунт і публікуйте свій контент.",
        sendVideo: "Надіслати відео",
        footer: "MelksTube. Діліться відповідально.",
        welcome: "ВІТАЄМО В MELKSTUBE",
        email: "Електронна пошта",
        password: "Пароль",
        noAccount: "Ще немає акаунта?",
        haveAccount: "Вже маєте акаунт?",
        shareContent: "ДІЛІТЬСЯ СВОЇМ КОНТЕНТОМ",
        uploadTitle: "Опублікувати відео",
        title: "Назва",
        titlePlaceholder: "Введіть назву відео",
        description: "Опис",
        descriptionPlaceholder: "Про що це відео?",
        category: "Категорія",
        file: "Відеофайл",
        hint: "Максимум 50 МБ на відео. Рекомендується MP4 (H.264/AAC).",
        sendPublish: "Надіслати та опублікувати",
        like: "Подобається",
        comments: "Коментарі",
        commentPlaceholder: "Напишіть коментар...",
        send: "Надіслати",
        member: "Учасник",
        publishedBy: "Опублікував",
        you: "ви",
        empty: "У цій категорії ще немає відео. Будьте першим!",
        configure: "Налаштуйте Supabase",
        configureText: "Сайт готовий. Налаштуйте Supabase, щоб активувати відео, реєстрацію та завантаження.",
        count: "відео",
        waiting: "Зачекайте...",
        confirmEmail: "Реєстрацію завершено. Перевірте електронну пошту.",
        loginSuccess: "Вхід успішний!",
        signupSuccess: "Акаунт створено!",
        loggedOut: "Ви вийшли з акаунта.",
        loginRequired: "Увійдіть або створіть акаунт.",
        configureFirst: "Спочатку налаштуйте Supabase.",
        fileTooBig: "Файл перевищує 50 МБ.",
        invalidFile: "Виберіть коректний відеофайл.",
        uploading: "Завантаження відео...",
        videoPublished: "Відео опубліковано!",
        alreadyPublished: "Ваше відео вже на MelksTube!",
        noVideos: "Відео ще не опубліковано.",
        feedError: "Помилка завантаження",
        authError: "Не вдалося завершити операцію.",
        language: "Вибрати мову",
        memberCommunity: "учасник спільноти",
        noComments: "Коментарів ще немає."
      }
    }
  };

  const ORIGINAL_CATEGORIES = [
    "Todos",
    "Música",
    "Entretenimento",
    "Educação",
    "Esportes",
    "Notícias",
    "Outros"
  ];

  const CATEGORY_OPTIONS = [
    "Música",
    "Entretenimento",
    "Educação",
    "Esportes",
    "Notícias",
    "Outros"
  ];

  function t(key) {
    return LANGUAGES[language].strings[key] ??
      LANGUAGES["pt-BR"].strings[key] ??
      key;
  }

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));
  }

  function toast(s) {
    $("toast").textContent = s;
    $("toast").classList.remove("hidden");

    clearTimeout(toast.timer);
    toast.timer = setTimeout(
      () => $("toast").classList.add("hidden"),
      3500
    );
  }

  function modal(id, on = true) {
    $(id).classList.toggle("hidden", !on);
  }

  function status(s) {
    $("feedStatus").textContent = s;
  }

  function userLabel(u) {
    return u?.user_metadata?.display_name ||
      u?.email?.split("@")[0] ||
      t("member");
  }

  function detectLanguage() {
    let saved = null;

    try {
      saved = localStorage.getItem("melkstube_language");
    } catch (_) {}

    if (saved && LANGUAGES[saved]) {
      return saved;
    }

    const browserLanguages = navigator.languages || [
      navigator.language || "pt-BR"
    ];

    for (const browserLang of browserLanguages) {
      const normalized = browserLang.toLowerCase();

      if (normalized.startsWith("pt")) return "pt-BR";
      if (normalized.startsWith("en")) return "en";
      if (normalized.startsWith("es")) return "es";
      if (normalized.startsWith("fr")) return "fr";
      if (normalized.startsWith("de")) return "de";
      if (normalized.startsWith("it")) return "it";
      if (normalized.startsWith("ja")) return "ja";
      if (normalized.startsWith("zh")) return "zh";
      if (normalized.startsWith("ar")) return "ar";
      if (normalized.startsWith("uk")) return "uk";
    }

    return "pt-BR";
  }

  function setLanguage(lang, save = true) {
    if (!LANGUAGES[lang]) lang = "pt-BR";

    language = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = LANGUAGES[lang].dir;

    if (save) {
      try {
        localStorage.setItem("melkstube_language", lang);
      } catch (_) {}
    }

    const selector = $("languageSelect");
    if (selector) {
      selector.value = lang;
      selector.setAttribute("aria-label", t("language"));
    }

    translateStatic();
    showAccount();
    renderVideos();
    updateAuthText();
    updateUploadText();
    updateWatchText();

    if (activeVideo) {
      loadEngagement();
    }

    status(
      videos.length + " " + t("count")
    );
  }

  function translateStatic() {
    $("searchInput").placeholder = t("search");
    $("searchInput").setAttribute("aria-label", t("searchAria"));

    $("searchBtn").setAttribute("aria-label", t("searchAria"));

    const brand = document.querySelector(".brand");
    if (brand) brand.setAttribute("aria-label", "MelksTube");

    const heroEyebrow = document.querySelector(".hero-copy .eyebrow");
    if (heroEyebrow) heroEyebrow.textContent = t("heroEyebrow");

    const heroTitle = document.querySelector(".hero-copy h1");
    if (heroTitle) {
      heroTitle.innerHTML =
        esc(t("heroTitle")) + " <span>" + esc(t("today")) + "</span>";
    }

    const heroText = document.querySelector(".hero-copy > p:not(.eyebrow)");
    if (heroText) heroText.textContent = t("heroText");

    $("heroUpload").textContent = t("publish");

    const artCaption = document.querySelector(".art-caption");
    if (artCaption) artCaption.textContent = t("watchShare");

    document.querySelectorAll(".chip").forEach((button, i) => {
      const translated = t("categories");
      button.textContent = translated[i] || button.dataset.category;
    });

    const sectionEyebrow = document.querySelector(".section-heading .eyebrow");
    if (sectionEyebrow) sectionEyebrow.textContent = t("community");

    const sectionTitle = document.querySelector(".section-heading h2");
    if (sectionTitle) sectionTitle.textContent = t("recent");

    const uploadEyebrow = document.querySelector(".upload-panel .eyebrow");
    if (uploadEyebrow) uploadEyebrow.textContent = t("yourTurn");

    const uploadTitle = document.querySelector(".upload-panel h2");
    if (uploadTitle) uploadTitle.textContent = t("shareTitle");

    const uploadText = document.querySelector(".upload-panel p:not(.eyebrow)");
    if (uploadText) uploadText.textContent = t("shareText");

    $("uploadCta").textContent = t("sendVideo");

    const footerText = document.querySelector("footer span");
    if (footerText) {
      footerText.innerHTML =
        "© <span id='year'>" +
        new Date().getFullYear() +
        "</span> MelksTube. " +
        esc(t("footer").replace("MelksTube. ", ""));
    }

    const authEyebrow = document.querySelector("#authModal .eyebrow");
    if (authEyebrow) authEyebrow.textContent = t("welcome");

    const uploadModalEyebrow = document.querySelector("#uploadModal .eyebrow");
    if (uploadModalEyebrow) uploadModalEyebrow.textContent = t("shareContent");

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(button => {
      button.setAttribute("aria-label", "Close");
    });

    updateAuthText();
    updateUploadText();
    updateWatchText();
  }

  function updateAuthText() {
    if (!$("authTitle")) return;

    $("authTitle").textContent =
      authMode === "login" ? t("login") : t("signup");

    $("authSubmit").textContent =
      authMode === "login" ? t("login") : t("signup2");

    $("authSwitch").innerHTML =
      authMode === "login"
        ? esc(t("noAccount")) +
          ' <button class="text-button" id="switchAuth" type="button">' +
          esc(t("signup")) +
          "</button>"
        : esc(t("haveAccount")) +
          ' <button class="text-button" id="switchAuth" type="button">' +
          esc(t("login")) +
          "</button>";

    $("switchAuth").onclick = () =>
      openAuth(authMode === "login" ? "signup" : "login");
  }

  function updateUploadText() {
    if (!$("uploadForm")) return;

    const labels = $("uploadForm").querySelectorAll("label");

    if (labels[0]) {
      labels[0].childNodes[0].textContent = t("title");
      $("videoTitle").placeholder = t("titlePlaceholder");
    }

    if (labels[1]) {
      labels[1].childNodes[0].textContent = t("description");
      $("videoDescription").placeholder = t("descriptionPlaceholder");
    }

    if (labels[2]) {
      labels[2].childNodes[0].textContent = t("category");
    }

    if (labels[3]) {
      labels[3].childNodes[0].textContent = t("file");
    }

    const options = $("videoCategory").options;

    CATEGORY_OPTIONS.forEach((original, i) => {
      if (options[i]) {
        options[i].value = original;
        options[i].textContent =
          t("categories")[ORIGINAL_CATEGORIES.indexOf(original)];
      }
    });

    const hint = document.querySelector(".hint");
    if (hint) hint.textContent = t("hint");

    $("publishBtn").textContent = t("sendPublish");
  }

  function updateWatchText() {
    if (!$("likeBtn")) return;

    $("likeBtn").setAttribute("aria-label", t("like"));

    const commentInput = $("commentInput");
    if (commentInput) commentInput.placeholder = t("commentPlaceholder");

    const commentHeading = document.querySelector(".comments h3");
    if (commentHeading) commentHeading.textContent = t("comments");

    const commentButton = $("commentForm").querySelector("button");
    if (commentButton) commentButton.textContent = t("send");
  }

  function showAccount() {
    if (!user) {
      $("accountArea").innerHTML =
        '<button class="outline" id="loginBtn" type="button">' +
        esc(t("login")) +
        '</button><button class="primary" id="signupBtn" type="button">' +
        esc(t("signup")) +
        "</button>";

      $("loginBtn").onclick = () => openAuth("login");
      $("signupBtn").onclick = () => openAuth("signup");
    } else {
      $("accountArea").innerHTML =
        '<span class="muted" style="align-self:center">' +
        esc(t("greeting")) +
        ", " +
        esc(userLabel(user)) +
        '</span><button class="outline" id="logoutBtn" type="button">' +
        esc(t("logout")) +
        "</button>";

      $("logoutBtn").onclick = logout;
    }
  }

  function openAuth(mode) {
    authMode = mode;

    $("authMessage").textContent = "";
    updateAuthText();

    modal("authModal");
  }

  async function logout() {
    if (!client) return;

    const result = await client.auth.signOut();

    if (result.error) {
      toast(result.error.message);
      return;
    }

    toast(t("loggedOut"));
  }

  async function authSubmit(e) {
    e.preventDefault();

    if (!client) return;

    const email = $("authEmail").value;
    const password = $("authPassword").value;

    $("authMessage").textContent = t("waiting");

    let result;

    if (authMode === "login") {
      result = await client.auth.signInWithPassword({
        email,
        password
      });
    } else {
      result = await client.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: email.split("@")[0]
          }
        }
      });
    }

    if (result.error) {
      $("authMessage").textContent = result.error.message;
      return;
    }

    if (authMode === "signup" && !result.data.session) {
      $("authMessage").textContent = t("confirmEmail");
      return;
    }

    modal("authModal", false);

    toast(
      authMode === "login"
        ? t("loginSuccess")
        : t("signupSuccess")
    );
  }

  async function loadFeed() {
    if (!client) {
      status(t("configure"));

      $("videoGrid").innerHTML =
        '<div class="empty">' +
        esc(t("configureText")) +
        "</div>";

      return;
    }

    status(t("loading"));

    let q = client
      .from("videos")
      .select("*")
      .eq("visibility", "public")
      .order("created_at", { ascending: false })
      .limit(60);

    if (category !== "Todos") {
      q = q.eq("category", category);
    }

    const term = $("searchInput").value.trim();

    if (term) {
      q = q.ilike("title", "%" + term + "%");
    }

    const { data, error } = await q;

    if (error) {
      status(t("feedError"));

      $("videoGrid").innerHTML =
        '<div class="empty">' +
        esc(error.message) +
        "</div>";

      return;
    }

    videos = data || [];

    status(videos.length + " " + t("count"));

    renderVideos();
  }

  function translatedCategory(original) {
    const index = ORIGINAL_CATEGORIES.indexOf(original);
    return index >= 0 ? t("categories")[index] : original;
  }

  function renderVideos() {
    if (!videos.length) {
      $("videoGrid").innerHTML =
        '<div class="empty">' +
        esc(t("empty")) +
        "</div>";

      return;
    }

    $("videoGrid").innerHTML = videos.map(v => {
      const date = new Date(v.created_at);

      return (
        '<article class="video-card" data-id="' +
        esc(v.id) +
        '">' +
        '<div class="thumb"><span>▶</span></div>' +
        '<div class="video-info">' +
        "<h3>" +
        esc(v.title) +
        "</h3>" +
        "<p>" +
        esc(translatedCategory(v.category)) +
        " · " +
        esc(date.toLocaleDateString(language)) +
        "</p>" +
        "</div>" +
        "</article>"
      );
    }).join("");

    document.querySelectorAll(".video-card").forEach(el => {
      el.onclick = () => watch(el.dataset.id);
    });
  }

  async function watch(id) {
    activeVideo = videos.find(v => String(v.id) === String(id));

    if (!activeVideo || !client) return;

    const { data } = client.storage
      .from("videos")
      .getPublicUrl(activeVideo.storage_path);

    $("watchVideo").src = data.publicUrl;

    $("watchTitle").textContent = activeVideo.title;
    $("watchDescription").textContent =
      activeVideo.description || "";

    $("watchAuthor").textContent =
      t("publishedBy") +
      " " +
      (activeVideo.user_id === user?.id
        ? t("you")
        : t("memberCommunity"));

    modal("watchModal");

    updateWatchText();

    await loadEngagement();
  }

  async function loadEngagement() {
    if (!activeVideo || !client) return;

    const [
      { count: likes, error: likeError },
      { data: comments, error: commentError }
    ] = await Promise.all([
      client
        .from("video_likes")
        .select("*", { count: "exact", head: true })
        .eq("video_id", activeVideo.id),

      client
        .from("comments")
        .select("*")
        .eq("video_id", activeVideo.id)
        .order("created_at", { ascending: true })
    ]);

    if (likeError) {
      $("likeCount").textContent = "0";
    } else {
      $("likeCount").textContent = likes || 0;
    }

    const mine = user
      ? await client
          .from("video_likes")
          .select("video_id")
          .eq("video_id", activeVideo.id)
          .eq("user_id", user.id)
          .maybeSingle()
      : { data: null };

    const liked = !!mine.data;

    $("likeBtn").innerHTML =
      (liked ? "♥ " : "♡ ") +
      esc(t("like")) +
      ' <span id="likeCount">' +
      (likes || 0) +
      "</span>";

    $("likeBtn").onclick = like;

    if (commentError) {
      $("commentList").innerHTML =
        '<p class="muted">' +
        esc(commentError.message) +
        "</p>";

      return;
    }

    $("commentList").innerHTML =
      (comments || []).map(c =>
        '<div class="comment"><strong>' +
        esc(t("member")) +
        " " +
        esc(c.user_id.slice(0, 6)) +
        "</strong><div>" +
        esc(c.body) +
        "</div></div>"
      ).join("") ||
      '<p class="muted">' +
      esc(t("noComments")) +
      "</p>";
  }

  async function like() {
    if (!requireLogin()) return;

    if (!activeVideo || !client) return;

    const { data: mine, error } = await client
      .from("video_likes")
      .select("video_id")
      .eq("video_id", activeVideo.id)
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) {
      toast(error.message);
      return;
    }

    const result = mine
      ? await client
          .from("video_likes")
          .delete()
          .eq("video_id", activeVideo.id)
          .eq("user_id", user.id)
      : await client
          .from("video_likes")
          .insert({
            video_id: activeVideo.id,
            user_id: user.id
          });

    if (result.error) {
      toast(result.error.message);
    } else {
      await loadEngagement();
    }
  }

  async function comment(e) {
    e.preventDefault();

    if (!requireLogin()) return;

    if (!activeVideo || !client) return;

    const body = $("commentInput").value.trim();

    if (!body) return;

    const result = await client
      .from("comments")
      .insert({
        video_id: activeVideo.id,
        user_id: user.id,
        body
      });

    if (result.error) {
      toast(result.error.message);
    } else {
      $("commentInput").value = "";
      await loadEngagement();
    }
  }

  function requireLogin() {
    if (!user) {
      modal("watchModal", false);
      openAuth("login");
      toast(t("loginRequired"));
      return false;
    }

    return true;
  }

  function openUpload() {
    if (!client) {
      toast(t("configureFirst"));
      return;
    }

    if (!requireLogin()) return;

    updateUploadText();
    modal("uploadModal");
  }

  async function upload(e) {
    e.preventDefault();

    if (!requireLogin()) return;

    if (!client) return;

    const file = $("videoFile").files[0];

    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      $("uploadMessage").textContent = t("fileTooBig");
      return;
    }

    if (!file.type.startsWith("video/")) {
      $("uploadMessage").textContent = t("invalidFile");
      return;
    }

    const title = $("videoTitle").value.trim();

    const ext = (file.name.split(".").pop() || "mp4")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

    const path = user.id + "/" + crypto.randomUUID() + "." + ext;

    $("publishBtn").disabled = true;
    $("uploadMessage").textContent = t("uploading");
    $("uploadProgress").classList.remove("hidden");
    $("progressBar").style.width = "15%";

    const up = await client.storage
      .from("videos")
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type
      });

    if (up.error) {
      $("uploadMessage").textContent = up.error.message;
      $("publishBtn").disabled = false;
      return;
    }

    $("progressBar").style.width = "75%";

    const ins = await client
      .from("videos")
      .insert({
        user_id: user.id,
        title,
        description: $("videoDescription").value.trim(),
        category: $("videoCategory").value,
        storage_path: path,
        visibility: "public"
      });

    if (ins.error) {
      await client.storage.from("videos").remove([path]);

      $("uploadMessage").textContent = ins.error.message;
      $("publishBtn").disabled = false;

      return;
    }

    $("progressBar").style.width = "100%";
    $("uploadMessage").textContent = t("videoPublished");

    $("uploadForm").reset();

    setTimeout(() => {
      modal("uploadModal", false);

      $("publishBtn").disabled = false;
      $("uploadProgress").classList.add("hidden");

      loadFeed();

      toast(t("alreadyPublished"));
    }, 900);
  }

  function init() {
    $("year").textContent = new Date().getFullYear();

    language = detectLanguage();

    const selector = $("languageSelect");

    if (selector) {
      selector.onchange = e => setLanguage(e.target.value);
    }

    translateStatic();

    setLanguage(language, false);

    $("heroUpload").onclick = openUpload;
    $("uploadCta").onclick = openUpload;

    $("authForm").onsubmit = authSubmit;
    $("uploadForm").onsubmit = upload;

    $("likeBtn").onclick = like;
    $("commentForm").onsubmit = comment;

    $("searchBtn").onclick = loadFeed;

    $("searchInput").addEventListener("keydown", e => {
      if (e.key === "Enter") loadFeed();
    });

    document.querySelectorAll(".chip").forEach((button, i) => {
      button.onclick = () => {
        category = ORIGINAL_CATEGORIES[i];

        document.querySelectorAll(".chip").forEach(x => {
          x.classList.toggle("selected", x === button);
        });

        loadFeed();
      };
    });

    document.querySelectorAll("[data-close]").forEach(button => {
      button.onclick = () => {
        modal(button.dataset.close, false);

        if (button.dataset.close === "watchModal") {
          $("watchVideo").pause();
          $("watchVideo").removeAttribute("src");
          $("watchVideo").load();
        }
      };
    });

    $("watchModal").addEventListener("click", e => {
      if (e.target.id === "watchModal") {
        $("watchVideo").pause();
        $("watchVideo").removeAttribute("src");
        $("watchVideo").load();
        modal("watchModal", false);
      }
    });

    if (!client) {
      showAccount();
      loadFeed();
      return;
    }

    client.auth.getSession().then(({ data }) => {
      user = data.session?.user || null;
      showAccount();
      loadFeed();
    });

    client.auth.onAuthStateChange((_event, session) => {
      user = session?.user || null;
      showAccount();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
