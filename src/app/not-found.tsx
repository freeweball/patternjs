"use client";

export default function NotFound() {
    return (
        <div
            id="notfound-wrapper"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: "linear-gradient(135deg, #f0f0f0, #dcdcdc)",
                overflow: "hidden",
                padding: "1rem",
                boxSizing: "border-box",
                zIndex: 1,
                transition: "transform 0.3s ease-out",
            }}
        >
            <div
                id="notfound-digits"
                style={{
                    display: "flex",
                    gap: "1rem",
                    fontSize: "8rem",
                    fontWeight: "bold",
                    fontFamily: "'Fredoka One', cursive",
                    textShadow: "4px 4px 0px #000000, 8px 8px 0px #c0c0c0",
                    background: "linear-gradient(45deg, #ff8c00, #ff2a68)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                <span className="bounce" style={{animationDelay: "0s"}}>
                    4
                </span>
                <span className="bounce" style={{animationDelay: "0.2s"}}>
                    0
                </span>
                <span className="bounce" style={{animationDelay: "0.4s"}}>
                    4
                </span>
            </div>

            <p
                style={{
                    fontSize: "1.5rem",
                    margin: "1rem 0",
                    animation: "fadeIn 1.5s ease-in-out",
                    fontWeight: "bold",
                }}
            >
                Страница не найдена
            </p>

            <a
                href="/"
                style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#696cff",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    transition: "background-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={() => {
                    const wrapper = document.getElementById("notfound-wrapper")!;
                    wrapper.style.transform = "rotate(-2deg)";
                    document.getElementById("notfound-digits")!.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={() => {
                    const wrapper = document.getElementById("notfound-wrapper")!;
                    wrapper.style.transform = "rotate(0deg)";
                    document.getElementById("notfound-digits")!.style.transform = "translateY(0)";
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#696cffcc")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#696cff")}
            >
                Вернуться на главную
            </a>

            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

          @keyframes bounceAnimation1 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-25px) scale(1.2); }
          }
          @keyframes bounceAnimation2 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.15); }
          }
          @keyframes bounceAnimation3 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.25); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .bounce:nth-child(1) { animation: bounceAnimation1 1.5s infinite; }
          .bounce:nth-child(2) { animation: bounceAnimation2 1.7s infinite; }
          .bounce:nth-child(3) { animation: bounceAnimation3 1.9s infinite; }
        `}
            </style>
        </div>
    );
}
