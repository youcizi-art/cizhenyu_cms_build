import { c as createDb, s as siteSettings, e as eq } from "./worker-entry-B2EmluNH.js";
import "node:events";
import "node:stream";
const MEMBER_FALLBACKS_EXT = {
  "zh-TW": {
    app: { loading: "載入中…", title: "會員中心", disabled: "會員功能未啟用", disabledHint: "請聯絡站點管理員開啟會員中心" },
    language: { label: "介面語言" },
    common: {
      save: "儲存",
      sendCode: "發送驗證碼",
      logout: "登出",
      captchaRequired: "請完成人機驗證",
      captchaFirst: "請先完成人機驗證",
      captchaLoadFailed: "人機驗證載入失敗，請重新整理頁面或檢查網域名稱是否已加入 Turnstile 主機名稱",
      captchaWidgetError: "人機驗證元件出錯，請確認會員網域名稱已加入 Cloudflare Turnstile 允許主機名稱",
      loadFailed: "載入失敗",
      actions: "操作"
    },
    nav: { overview: "概覽", profile: "資料", assets: "資產", tokens: "API 權杖", security: "安全" },
    login: {
      title: "登入帳號",
      email: "電子郵件",
      password: "密碼",
      submit: "登入",
      success: "登入成功",
      failed: "登入失敗",
      register: "註冊",
      forgot: "找回密碼",
      oauth: "或使用第三方帳號"
    },
    register: {
      title: "建立帳號",
      email: "電子郵件",
      code: "驗證碼",
      nickname: "暱稱",
      password: "密碼",
      submit: "註冊",
      success: "註冊成功",
      failed: "註冊失敗",
      hasAccount: "已有帳號？登入",
      codeSent: "驗證碼已發送",
      sendFailed: "發送失敗"
    },
    forgot: {
      title: "找回密碼",
      email: "電子郵件",
      code: "驗證碼",
      password: "新密碼",
      submit: "重設密碼",
      success: "密碼已重設",
      failed: "重設失敗",
      codeSent: "驗證碼已發送",
      sendFailed: "發送失敗"
    },
    dashboard: {
      hello: "你好，{name}",
      level: "等級",
      balance: "餘額（元）",
      points: "積分",
      shortcuts: "捷徑入口",
      editProfile: "完善資料",
      viewAssets: "查看資產紀錄",
      manageTokens: "管理 API 權杖",
      changePassword: "修改密碼"
    },
    profile: {
      title: "個人資料",
      nickname: "暱稱",
      phone: "手機",
      avatar: "頭像",
      birthday: "生日",
      bio: "簽名",
      saved: "已儲存",
      saveFailed: "儲存失敗",
      upload: "上傳頭像",
      uploading: "處理中…",
      uploadFailed: "頭像處理失敗",
      cropTitle: "裁剪並壓縮頭像",
      cropCancel: "取消",
      cropConfirm: "確認並套用",
      clearAvatar: "清除"
    },
    assets: {
      title: "當前資產",
      balance: "餘額",
      points: "積分",
      balanceLogs: "餘額紀錄",
      pointsLogs: "積分紀錄",
      type: "類型",
      amount: "變動",
      amountYuan: "變動（元）",
      remark: "備註",
      time: "時間"
    },
    tokens: {
      title: "API 權杖",
      hint: "權杖可用於公開 API 的 Authorization 標頭（Bearer）。明文僅在建立時顯示一次。",
      name: "權杖名稱",
      colName: "名稱",
      defaultName: "預設權杖",
      create: "建立權杖",
      created: "已建立",
      createFailed: "建立失敗",
      newToken: "新權杖（請立即儲存）",
      prefix: "前置詞",
      status: "狀態",
      revoke: "撤銷",
      revoked: "已撤銷",
      revokeFailed: "撤銷失敗"
    },
    security: {
      title: "修改密碼",
      oldPassword: "原密碼",
      password: "新密碼",
      submit: "更新密碼",
      success: "密碼已更新，請重新登入",
      failed: "更新失敗"
    }
  },
  ja: {
    app: { loading: "読み込み中…", title: "メンバーセンター", disabled: "メンバー機能は無効です", disabledHint: "管理者に連絡してメンバーセンターを有効にしてください" },
    language: { label: "言語" },
    common: {
      save: "保存",
      sendCode: "認証コード送信",
      logout: "ログアウト",
      captchaRequired: "キャプチャを完了してください",
      captchaFirst: "まずキャプチャを完了してください",
      captchaLoadFailed: "キャプチャの読み込みに失敗しました。再読み込みするか、Turnstile のホスト名を確認してください。",
      captchaWidgetError: "キャプチャウィジェットエラー。ドメインが Cloudflare Turnstile で許可されているか確認してください。",
      loadFailed: "読み込み失敗",
      actions: "操作"
    },
    nav: { overview: "概要", profile: "プロフィール", assets: "資産", tokens: "API トークン", security: "セキュリティ" },
    login: {
      title: "サインイン",
      email: "メールアドレス",
      password: "パスワード",
      submit: "サインイン",
      success: "サインイン成功",
      failed: "サインイン失敗",
      register: "新規登録",
      forgot: "パスワードを忘れた場合",
      oauth: "または外部アカウントで続行"
    },
    register: {
      title: "アカウント作成",
      email: "メールアドレス",
      code: "認証コード",
      nickname: "ニックネーム",
      password: "パスワード",
      submit: "登録",
      success: "登録完了",
      failed: "登録失敗",
      hasAccount: "すでにアカウントをお持ちですか？サインイン",
      codeSent: "認証コードを送信しました",
      sendFailed: "送信失敗"
    },
    forgot: {
      title: "パスワード再設定",
      email: "メールアドレス",
      code: "認証コード",
      password: "新しいパスワード",
      submit: "リセット",
      success: "パスワードを再設定しました",
      failed: "再設定失敗",
      codeSent: "認証コードを送信しました",
      sendFailed: "送信失敗"
    },
    dashboard: {
      hello: "こんにちは、{name}",
      level: "ランク",
      balance: "残高",
      points: "ポイント",
      shortcuts: "ショートカット",
      editProfile: "プロフィール編集",
      viewAssets: "資産履歴",
      manageTokens: "API トークン",
      changePassword: "パスワード変更"
    },
    profile: {
      title: "プロフィール",
      nickname: "ニックネーム",
      phone: "電話番号",
      avatar: "アバター",
      birthday: "誕生日",
      bio: "自己紹介",
      saved: "保存しました",
      saveFailed: "保存失敗",
      upload: "アバターアップロード",
      uploading: "処理中…",
      uploadFailed: "処理失敗",
      cropTitle: "アバターのトリミングと圧縮",
      cropCancel: "キャンセル",
      cropConfirm: "適用",
      clearAvatar: "削除"
    },
    assets: {
      title: "現在の資産",
      balance: "残高",
      points: "ポイント",
      balanceLogs: "残高履歴",
      pointsLogs: "ポイント履歴",
      type: "タイプ",
      amount: "変動",
      amountYuan: "変動（元）",
      remark: "備考",
      time: "日時"
    },
    tokens: {
      title: "API トークン",
      hint: "公開 API の Authorization: Bearer ヘッダーとして使用できます。平文は作成時にのみ一度表示されます。",
      name: "トークン名",
      colName: "名前",
      defaultName: "デフォルトトークン",
      create: "作成",
      created: "作成完了",
      createFailed: "作成失敗",
      newToken: "新しいトークン（今すぐ保存してください）",
      prefix: "プレフィックス",
      status: "ステータス",
      revoke: "失効",
      revoked: "失効済み",
      revokeFailed: "失効失敗"
    },
    security: {
      title: "パスワード変更",
      oldPassword: "現在のパスワード",
      password: "新しいパスワード",
      submit: "更新",
      success: "パスワードを更新しました。再度サインインしてください",
      failed: "更新失敗"
    }
  },
  es: {
    app: { loading: "Cargando…", title: "Centro de miembros", disabled: "Centro de miembros deshabilitado", disabledHint: "Póngase en contacto con el administrador del sitio para habilitarlo" },
    language: { label: "Idioma" },
    common: {
      save: "Guardar",
      sendCode: "Enviar código",
      logout: "Cerrar sesión",
      captchaRequired: "Por favor complete la verificación humana",
      captchaFirst: "Por favor complete la verificación primero",
      captchaLoadFailed: "Error al cargar el captcha. Actualice o verifique el nombre de host en Turnstile.",
      captchaWidgetError: "Error del widget de captcha. Asegúrese de que el dominio esté permitido en Cloudflare Turnstile.",
      loadFailed: "Error al cargar",
      actions: "Acciones"
    },
    nav: { overview: "Resumen", profile: "Perfil", assets: "Activos", tokens: "Tokens de API", security: "Seguridad" },
    login: {
      title: "Iniciar sesión",
      email: "Correo electrónico",
      password: "Contraseña",
      submit: "Iniciar sesión",
      success: "Sesión iniciada",
      failed: "Error al iniciar sesión",
      register: "Registrarse",
      forgot: "¿Olvidó su contraseña?",
      oauth: "O continuar con"
    },
    register: {
      title: "Crear cuenta",
      email: "Correo electrónico",
      code: "Código",
      nickname: "Apodo",
      password: "Contraseña",
      submit: "Registrarse",
      success: "Registrado con éxito",
      failed: "Error en el registro",
      hasAccount: "¿Ya tiene una cuenta? Iniciar sesión",
      codeSent: "Código enviado",
      sendFailed: "Error al enviar código"
    },
    forgot: {
      title: "Restablecer contraseña",
      email: "Correo electrónico",
      code: "Código",
      password: "Nueva contraseña",
      submit: "Restablecer",
      success: "Contraseña restablecida",
      failed: "Error al restablecer",
      codeSent: "Código enviado",
      sendFailed: "Error al enviar código"
    },
    dashboard: {
      hello: "Hola, {name}",
      level: "Nivel",
      balance: "Saldo",
      points: "Puntos",
      shortcuts: "Accesos directos",
      editProfile: "Editar perfil",
      viewAssets: "Historial de activos",
      manageTokens: "Tokens de API",
      changePassword: "Cambiar contraseña"
    },
    profile: {
      title: "Perfil",
      nickname: "Apodo",
      phone: "Teléfono",
      avatar: "Avatar",
      birthday: "Fecha de nacimiento",
      bio: "Biografía",
      saved: "Guardado",
      saveFailed: "Error al guardar",
      upload: "Subir avatar",
      uploading: "Procesando…",
      uploadFailed: "Error al procesar el avatar",
      cropTitle: "Recortar y comprimir avatar",
      cropCancel: "Cancelar",
      cropConfirm: "Aplicar",
      clearAvatar: "Eliminar"
    },
    assets: {
      title: "Activos actuales",
      balance: "Saldo",
      points: "Puntos",
      balanceLogs: "Historial de saldo",
      pointsLogs: "Historial de puntos",
      type: "Tipo",
      amount: "Cambio",
      amountYuan: "Cambio (CNY)",
      remark: "Nota",
      time: "Fecha"
    },
    tokens: {
      title: "Tokens de API",
      hint: "Úselo como Authorization: Bearer. El token solo se muestra una vez al crearlo.",
      name: "Nombre del token",
      colName: "Nombre",
      defaultName: "Token predeterminado",
      create: "Crear",
      created: "Creado",
      createFailed: "Error al crear",
      newToken: "Nuevo token (guárdelo ahora)",
      prefix: "Prefijo",
      status: "Estado",
      revoke: "Revocar",
      revoked: "Revocado",
      revokeFailed: "Error al revocar"
    },
    security: {
      title: "Cambiar contraseña",
      oldPassword: "Contraseña actual",
      password: "Nueva contraseña",
      submit: "Actualizar",
      success: "Contraseña actualizada, por favor inicie sesión nuevamente",
      failed: "Error al actualizar"
    }
  },
  pt: {
    app: { loading: "Carregando…", title: "Central de Membros", disabled: "Central de membros desativada", disabledHint: "Entre em contato com o administrador para ativar" },
    language: { label: "Idioma" },
    common: {
      save: "Salvar",
      sendCode: "Enviar código",
      logout: "Sair",
      captchaRequired: "Por favor, complete a verificação",
      captchaFirst: "Por favor, complete a verificação primeiro",
      captchaLoadFailed: "Falha ao carregar o captcha. Atualize a página ou verifique o host no Turnstile.",
      captchaWidgetError: "Erro no componente de verificação. Certifique-se de que o domínio está permitido no Turnstile.",
      loadFailed: "Falha ao carregar",
      actions: "Ações"
    },
    nav: { overview: "Visão Geral", profile: "Perfil", assets: "Ativos", tokens: "Tokens de API", security: "Segurança" },
    login: {
      title: "Entrar",
      email: "E-mail",
      password: "Senha",
      submit: "Entrar",
      success: "Sessão iniciada",
      failed: "Falha ao entrar",
      register: "Cadastrar",
      forgot: "Esqueceu a senha?",
      oauth: "Ou continue com"
    },
    register: {
      title: "Criar conta",
      email: "E-mail",
      code: "Código",
      nickname: "Apelido",
      password: "Senha",
      submit: "Cadastrar",
      success: "Cadastrado com sucesso",
      failed: "Falha no cadastro",
      hasAccount: "Já tem uma conta? Entrar",
      codeSent: "Código enviado",
      sendFailed: "Falha ao enviar código"
    },
    forgot: {
      title: "Redefinir senha",
      email: "E-mail",
      code: "Código",
      password: "Nova senha",
      submit: "Redefinir",
      success: "Senha redefinida",
      failed: "Falha ao redefinir",
      codeSent: "Código enviado",
      sendFailed: "Falha ao enviar código"
    },
    dashboard: {
      hello: "Olá, {name}",
      level: "Nível",
      balance: "Saldo",
      points: "Pontos",
      shortcuts: "Atalhos",
      editProfile: "Editar perfil",
      viewAssets: "Histórico de ativos",
      manageTokens: "Tokens de API",
      changePassword: "Alterar senha"
    },
    profile: {
      title: "Perfil",
      nickname: "Apelido",
      phone: "Telefone",
      avatar: "Avatar",
      birthday: "Aniversário",
      bio: "Biografia",
      saved: "Salvo",
      saveFailed: "Falha ao salvar",
      upload: "Enviar avatar",
      uploading: "Processando…",
      uploadFailed: "Falha ao processar avatar",
      cropTitle: "Recortar e comprimir avatar",
      cropCancel: "Cancelar",
      cropConfirm: "Aplicar",
      clearAvatar: "Limpar"
    },
    assets: {
      title: "Ativos atuais",
      balance: "Saldo",
      points: "Pontos",
      balanceLogs: "Histórico de saldo",
      pointsLogs: "Histórico de pontos",
      type: "Tipo",
      amount: "Alteração",
      amountYuan: "Alteração (CNY)",
      remark: "Observação",
      time: "Data"
    },
    tokens: {
      title: "Tokens de API",
      hint: "Use como cabeçalho Authorization: Bearer. O token em texto puro é exibido apenas uma vez.",
      name: "Nome do token",
      colName: "Nome",
      defaultName: "Token Padrão",
      create: "Criar",
      created: "Criado",
      createFailed: "Falha ao criar",
      newToken: "Novo token (salve agora)",
      prefix: "Prefixo",
      status: "Status",
      revoke: "Revogar",
      revoked: "Revogado",
      revokeFailed: "Falha ao revogar"
    },
    security: {
      title: "Alterar senha",
      oldPassword: "Senha atual",
      password: "Nova senha",
      submit: "Atualizar",
      success: "Senha atualizada, por favor faça login novamente",
      failed: "Falha ao atualizar"
    }
  },
  ar: {
    app: { loading: "جارٍ التحميل…", title: "مركز الأعضاء", disabled: "تم تعطيل مركز الأعضاء", disabledHint: "يرجى الاتصال بمسؤول الموقع لتمكينه" },
    language: { label: "اللغة" },
    common: {
      save: "حفظ",
      sendCode: "إرسال الرمز",
      logout: "تسجيل الخروج",
      captchaRequired: "يرجى إكمال التحقق البشري",
      captchaFirst: "يرجى إكمال التحقق أولاً",
      captchaLoadFailed: "فشل تحميل التحقق. يرجى التحديث أو التحقق من اسم المضيف في Turnstile.",
      captchaWidgetError: "خطأ في أداة التحقق. تأكد من السماح بالنطاق في Cloudflare Turnstile.",
      loadFailed: "فشل التحميل",
      actions: "الإجراءات"
    },
    nav: { overview: "نظرة عامة", profile: "الملف الشخصي", assets: "الأصول", tokens: "رموز API", security: "الأمان" },
    login: {
      title: "تسجيل الدخول",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      submit: "تسجيل الدخول",
      success: "تم تسجيل الدخول بنجاح",
      failed: "فشل تسجيل الدخول",
      register: "إنشاء حساب",
      forgot: "نسيت كلمة المرور؟",
      oauth: "أو المتابعة باستخدام"
    },
    register: {
      title: "إنشاء حساب",
      email: "البريد الإلكتروني",
      code: "الرمز",
      nickname: "الاسم المستعار",
      password: "كلمة المرور",
      submit: "تسجيل",
      success: "تم التسجيل بنجاح",
      failed: "فشل التسجيل",
      hasAccount: "هل لديك حساب بالفعل؟ تسجيل الدخول",
      codeSent: "تم إرسال الرمز",
      sendFailed: "فشل إرسال الرمز"
    },
    forgot: {
      title: "إعادة تعيين كلمة المرور",
      email: "البريد الإلكتروني",
      code: "الرمز",
      password: "كلمة المرور الجديدة",
      submit: "إعادة تعيين",
      success: "تمت إعادة تعيين كلمة المرور",
      failed: "فشل إعادة التعيين",
      codeSent: "تم إرسال الرمز",
      sendFailed: "فشل إرسال الرمز"
    },
    dashboard: {
      hello: "مرحباً، {name}",
      level: "المستوى",
      balance: "الرصيد",
      points: "النقاط",
      shortcuts: "اختصارات",
      editProfile: "تعديل الملف الشخصي",
      viewAssets: "سجل الأصول",
      manageTokens: "رموز API",
      changePassword: "تغيير كلمة المرور"
    },
    profile: {
      title: "الملف الشخصي",
      nickname: "الاسم المستعار",
      phone: "رقم الهاتف",
      avatar: "الصورة الرمزية",
      birthday: "تاريخ الميلاد",
      bio: "نبذة",
      saved: "تم الحفظ",
      saveFailed: "فشل الحفظ",
      upload: "تحميل صورة",
      uploading: "جارٍ المعالجة…",
      uploadFailed: "فشل معالجة الصورة",
      cropTitle: "قص وضغط الصورة",
      cropCancel: "إلغاء",
      cropConfirm: "تطبيق",
      clearAvatar: "مسح"
    },
    assets: {
      title: "الأصول الحالية",
      balance: "الرصيد",
      points: "النقاط",
      balanceLogs: "سجل الرصيد",
      pointsLogs: "سجل النقاط",
      type: "النوع",
      amount: "التغيير",
      amountYuan: "التغيير (يوان)",
      remark: "ملاحظة",
      time: "الوقت"
    },
    tokens: {
      title: "رموز API",
      hint: "تُستخدم كرأس Authorization: Bearer. يُعرض الرمز الصريح مرة واحدة فقط عند الإنشاء.",
      name: "اسم الرمز",
      colName: "الاسم",
      defaultName: "الرمز الافتراضي",
      create: "إنشاء",
      created: "تم الإنشاء",
      createFailed: "فشل الإنشاء",
      newToken: "رمز جديد (احفظه الآن)",
      prefix: "البادئة",
      status: "الحالة",
      revoke: "إلغاء",
      revoked: "تم الإلغاء",
      revokeFailed: "فشل الإلغاء"
    },
    security: {
      title: "تغيير كلمة المرور",
      oldPassword: "كلمة المرور الحالية",
      password: "كلمة المرور الجديدة",
      submit: "تحديث",
      success: "تم تحديث كلمة المرور، يرجى تسجيل الدخول مجدداً",
      failed: "فشل التحديث"
    }
  }
};
function cloneMemberDict(value) {
  return JSON.parse(JSON.stringify(value ?? {}));
}
function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
function deepMergeTranslations(target, source) {
  if (!isPlainObject(target) || !isPlainObject(source)) {
    return cloneMemberDict(source ?? target ?? {});
  }
  const result = { ...target };
  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = result[key];
    if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
      result[key] = deepMergeTranslations(targetValue, sourceValue);
    } else {
      result[key] = cloneMemberDict(sourceValue);
    }
  }
  return result;
}
const MEMBER_FALLBACKS = {
  "zh-CN": {
    app: { loading: "加载中…", title: "会员中心", disabled: "会员功能未启用", disabledHint: "请联系站点管理员开启会员中心" },
    language: { label: "界面语言" },
    common: {
      save: "保存",
      sendCode: "发送验证码",
      logout: "退出",
      captchaRequired: "请完成人机验证",
      captchaFirst: "请先完成人机验证",
      captchaLoadFailed: "人机验证加载失败，请刷新页面或检查域名是否已加入 Turnstile 主机名",
      captchaWidgetError: "人机验证组件出错，请确认会员域名已加入 Cloudflare Turnstile 允许主机名",
      loadFailed: "加载失败",
      actions: "操作"
    },
    nav: { overview: "概览", profile: "资料", assets: "资产", tokens: "API 令牌", security: "安全" },
    login: {
      title: "登录账号",
      email: "邮箱",
      password: "密码",
      submit: "登录",
      success: "登录成功",
      failed: "登录失败",
      register: "注册",
      forgot: "找回密码",
      oauth: "或使用第三方账号"
    },
    register: {
      title: "创建账号",
      email: "邮箱",
      code: "验证码",
      nickname: "昵称",
      password: "密码",
      submit: "注册",
      success: "注册成功",
      failed: "注册失败",
      hasAccount: "已有账号？登录",
      codeSent: "验证码已发送",
      sendFailed: "发送失败"
    },
    forgot: {
      title: "找回密码",
      email: "邮箱",
      code: "验证码",
      password: "新密码",
      submit: "重置密码",
      success: "密码已重置",
      failed: "重置失败",
      codeSent: "验证码已发送",
      sendFailed: "发送失败"
    },
    dashboard: {
      hello: "你好，{name}",
      level: "等级",
      balance: "余额（元）",
      points: "积分",
      shortcuts: "快捷入口",
      editProfile: "完善资料",
      viewAssets: "查看资产流水",
      manageTokens: "管理 API 令牌",
      changePassword: "修改密码"
    },
    profile: {
      title: "个人资料",
      nickname: "昵称",
      phone: "手机",
      avatar: "头像",
      birthday: "生日",
      bio: "签名",
      saved: "已保存",
      saveFailed: "保存失败",
      upload: "上传头像",
      uploading: "处理中…",
      uploadFailed: "头像处理失败",
      cropTitle: "裁剪并压缩头像",
      cropCancel: "取消",
      cropConfirm: "确认并应用",
      clearAvatar: "清除"
    },
    assets: {
      title: "当前资产",
      balance: "余额",
      points: "积分",
      balanceLogs: "余额流水",
      pointsLogs: "积分流水",
      type: "类型",
      amount: "变动",
      amountYuan: "变动（元）",
      remark: "备注",
      time: "时间"
    },
    tokens: {
      title: "API 令牌",
      hint: "令牌可用于公开 API 的 Authorization 头（Bearer）。明文仅在创建时显示一次。",
      name: "令牌名称",
      colName: "名称",
      defaultName: "默认令牌",
      create: "创建令牌",
      created: "已创建",
      createFailed: "创建失败",
      newToken: "新令牌（请立即保存）",
      prefix: "前缀",
      status: "状态",
      revoke: "撤销",
      revoked: "已撤销",
      revokeFailed: "撤销失败"
    },
    security: {
      title: "修改密码",
      oldPassword: "原密码",
      password: "新密码",
      submit: "更新密码",
      success: "密码已更新，请重新登录",
      failed: "更新失败"
    }
  },
  "en-US": {
    app: { loading: "Loading…", title: "Member Center", disabled: "Member center is disabled", disabledHint: "Please contact the site admin to enable it" },
    language: { label: "Language" },
    common: {
      save: "Save",
      sendCode: "Send code",
      logout: "Log out",
      captchaRequired: "Please complete the captcha",
      captchaFirst: "Please complete the captcha first",
      captchaLoadFailed: "Captcha failed to load. Refresh or add this hostname in Turnstile.",
      captchaWidgetError: "Captcha widget error. Ensure the member domain is allowed in Cloudflare Turnstile.",
      loadFailed: "Failed to load",
      actions: "Actions"
    },
    nav: { overview: "Overview", profile: "Profile", assets: "Assets", tokens: "API Tokens", security: "Security" },
    login: {
      title: "Sign in",
      email: "Email",
      password: "Password",
      submit: "Sign in",
      success: "Signed in",
      failed: "Sign-in failed",
      register: "Register",
      forgot: "Forgot password",
      oauth: "Or continue with"
    },
    register: {
      title: "Create account",
      email: "Email",
      code: "Code",
      nickname: "Nickname",
      password: "Password",
      submit: "Sign up",
      success: "Registered",
      failed: "Registration failed",
      hasAccount: "Already have an account? Sign in",
      codeSent: "Code sent",
      sendFailed: "Failed to send code"
    },
    forgot: {
      title: "Reset password",
      email: "Email",
      code: "Code",
      password: "New password",
      submit: "Reset",
      success: "Password reset",
      failed: "Reset failed",
      codeSent: "Code sent",
      sendFailed: "Failed to send code"
    },
    dashboard: {
      hello: "Hello, {name}",
      level: "Level",
      balance: "Balance",
      points: "Points",
      shortcuts: "Shortcuts",
      editProfile: "Edit profile",
      viewAssets: "Asset logs",
      manageTokens: "API tokens",
      changePassword: "Change password"
    },
    profile: {
      title: "Profile",
      nickname: "Nickname",
      phone: "Phone",
      avatar: "Avatar",
      birthday: "Birthday",
      bio: "Bio",
      saved: "Saved",
      saveFailed: "Save failed",
      upload: "Upload avatar",
      uploading: "Processing…",
      uploadFailed: "Avatar processing failed",
      cropTitle: "Crop & compress avatar",
      cropCancel: "Cancel",
      cropConfirm: "Apply",
      clearAvatar: "Clear"
    },
    assets: {
      title: "Assets",
      balance: "Balance",
      points: "Points",
      balanceLogs: "Balance logs",
      pointsLogs: "Points logs",
      type: "Type",
      amount: "Change",
      amountYuan: "Change (CNY)",
      remark: "Remark",
      time: "Time"
    },
    tokens: {
      title: "API Tokens",
      hint: "Use as Authorization: Bearer. Plaintext is shown once on create.",
      name: "Token name",
      colName: "Name",
      defaultName: "Default Token",
      create: "Create",
      created: "Created",
      createFailed: "Create failed",
      newToken: "New token (save it now)",
      prefix: "Prefix",
      status: "Status",
      revoke: "Revoke",
      revoked: "Revoked",
      revokeFailed: "Revoke failed"
    },
    security: {
      title: "Change password",
      oldPassword: "Current password",
      password: "New password",
      submit: "Update",
      success: "Password updated, please sign in again",
      failed: "Update failed"
    }
  },
  ...MEMBER_FALLBACKS_EXT
};
const MEMBER_TRANSLATIONS_KEY = "member_translations";
function unwrapLocalePayload(locale, raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const obj = raw;
  const nested = obj[locale];
  if (nested && typeof nested === "object" && !Array.isArray(nested) && Object.keys(obj).length === 1) {
    return cloneMemberDict(nested);
  }
  return cloneMemberDict(obj);
}
function normalizeMemberTranslationsMap(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const next = {};
  for (const [locale, value] of Object.entries(input)) {
    const code = String(locale || "").trim();
    if (!code) continue;
    next[code] = unwrapLocalePayload(code, value);
  }
  return next;
}
function buildEditorTranslations(locales, stored) {
  const next = {};
  for (const locale of locales) {
    const fallback = MEMBER_FALLBACKS[locale] || MEMBER_FALLBACKS["en-US"] || MEMBER_FALLBACKS["zh-CN"] || {};
    const override = stored[locale] || {};
    next[locale] = deepMergeTranslations(fallback, override);
  }
  return next;
}
async function getMemberTranslationsMap(db) {
  const orm = createDb(db);
  const row = await orm.select({ value_json: siteSettings.valueJson }).from(siteSettings).where(eq(siteSettings.key, MEMBER_TRANSLATIONS_KEY)).get();
  if (!row?.value_json) return {};
  try {
    return normalizeMemberTranslationsMap(JSON.parse(row.value_json));
  } catch {
    return {};
  }
}
async function saveMemberTranslationsMap(db, input) {
  const next = normalizeMemberTranslationsMap(input);
  const ts = Date.now();
  const orm = createDb(db);
  await orm.insert(siteSettings).values({
    key: MEMBER_TRANSLATIONS_KEY,
    valueJson: JSON.stringify(next),
    updatedAt: ts
  }).onConflictDoUpdate({
    target: siteSettings.key,
    set: {
      valueJson: JSON.stringify(next),
      updatedAt: ts
    }
  }).run();
  return next;
}
async function getMemberTranslationsForLocale(db, locale) {
  const map = await getMemberTranslationsMap(db);
  const code = String(locale || "").trim() || "zh-CN";
  const variants = [
    code,
    code.replace("_", "-"),
    code.toLowerCase(),
    code.split("-")[0] || ""
  ].filter(Boolean);
  for (const variant of variants) {
    const hit = Object.entries(map).find(([key]) => key === variant || key.toLowerCase() === variant.toLowerCase() || key.toLowerCase().replace("_", "-") === variant.toLowerCase().replace("_", "-"));
    if (hit) return hit[1];
  }
  return null;
}
export {
  MEMBER_TRANSLATIONS_KEY,
  buildEditorTranslations,
  getMemberTranslationsForLocale,
  getMemberTranslationsMap,
  normalizeMemberTranslationsMap,
  saveMemberTranslationsMap,
  unwrapLocalePayload
};
