// ==========================
// SPACE KEY
// script.js
// ==========================

// نموذج التواصل عبر واتساب

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const city = document.getElementById("city").value;
        const area = document.getElementById("area").value;
        const budget = document.getElementById("budget").value;
        const message = document.getElementById("message").value;

        const text = `🏠 طلب جديد من موقع SPACE KEY

👤 الاسم: ${name}

📞 الهاتف: ${phone}

🛠️ الخدمة: ${service}

📍 المحافظة: ${city}

📐 المساحة: ${area} متر

💰 الميزانية: ${budget}

📝 تفاصيل المشروع:

${message}`;

        const whatsapp =
            "https://wa.me/201011904232?text=" +
            encodeURIComponent(text);

        window.open(whatsapp, "_blank");

    });

}

// ==========================
// تغيير لون الهيدر عند النزول
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "#000";

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.4)";

    } else {

        header.style.background = "#111";

        header.style.boxShadow = "none";

    }

});

// ==========================
// عداد الإحصائيات
// ==========================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const update = () => {

        count += Math.ceil(target / 100);

        if (count >= target) {

            counter.innerText = target + "+";

        } else {

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        }

    };

    update();

});