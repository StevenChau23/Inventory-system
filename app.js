// 1. 從 Firebase 官方 CDN 引入模組
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// 2. 你的 Firebase 專案設定 (目前先放預設，稍後需要換成你自己的)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 3. 初始化 Firebase 與認證服務
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 4. 綁定 HTML 畫面上的按鈕與文字
const loginBtn = document.getElementById("loginBtn");
const dataOutput = document.getElementById("dataOutput");

// 5. 設定當按下「登入帳號」時要執行的動作
loginBtn.addEventListener("click", () => {
    dataOutput.innerText = "正在呼叫 Google 登入...";
    
    signInWithPopup(auth, provider)
    .then((result) => {
        // 登入成功
        const user = result.user;
        dataOutput.innerText = `登入成功！你好，${user.displayName} (${user.email})`;
    })
    .catch((error) => {
        // 登入失敗
        console.error("登入錯誤:", error);
        dataOutput.innerText = `登入失敗：請檢查 Firebase 設定或 Console 報錯`;
    });
});
