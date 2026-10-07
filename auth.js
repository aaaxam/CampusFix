// CampusFix 登录权限系统

function checkLogin(requiredRole) {

    const role = localStorage.getItem("userRole");

    // 没有登录
    if (!role) {

        window.location.href = "login.html";

        return false;
    }

    // 登录身份不正确
    if (
        requiredRole &&
        role !== requiredRole
    ) {

        alert("没有权限访问该页面！");

        if (role === "student") {

            window.location.href =
                "student.html";

        } else {

            window.location.href =
                "worker.html";
        }

        return false;
    }

    return true;
}


// 退出登录
function logout() {

    localStorage.removeItem("userRole");

    window.location.href =
        "index.html";
}