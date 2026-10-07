// 检查用户是否已经登录
function checkLogin(requiredRole) {

    const role = localStorage.getItem("userRole");

    // 没有登录
    if (!role) {
        window.location.href = "login.html";
        return;
    }

    // 角色不正确
    if (requiredRole && role !== requiredRole) {

        alert("没有权限访问该页面！");

        window.location.href =
            role === "student"
                ? "student.html"
                : "worker.html";

    }

}


// 退出登录
function logout() {

    localStorage.removeItem("userRole");

    window.location.href = "index.html";

}