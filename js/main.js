document.querySelector("button").addEventListener("click", () => {
    Notification.requestPermission().then( () => {
        console.log("Notification");
        const notif = new Notification("Nouveau message 💬", {
            body: "Hello !",
            data: { hello: "World" },
            icon: "public/bell-solid.svg",
            tag: "Hello Message",
        })
        notif.addEventListener("error", () => {
            alert("Notification not enabled 🔔🚫");
        })
        setInterval(() => {
            notif.close()
        }, 5000);
    })
})