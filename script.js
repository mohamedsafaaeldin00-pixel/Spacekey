// نموذج التواصل عبر واتساب
document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    // قراءة البيانات من النموذج
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const city = document.getElementById("city").value.trim();
    const area = document.getElementById("area").value.trim();
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value.trim();

    // رقم واتساب الشركة
    const whatsappNumber = "201011904232";

    // تكوين الرسالة
    const text = `🏠 طلب جديد من موقع SPACE KEY

👤 الاسم: ${name}

📞 رقم الهاتف: ${phone}

🛠️ نوع الخدمة: ${service}

📍 المحافظة / المدينة: ${city}

📐 المساحة: ${area} متر

💰 الميزانية: ${budget}

📝 تفاصيل الطلب:
${message}`;

    // فتح واتساب
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

});