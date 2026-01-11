const animals = [
 {
        ten: "Cáo",
        anh: "images/cao/cao_1.jpg",
        mota: "Cáo là loài động vật có vú thuộc họ Chó, nổi tiếng với sự thông minh và khả năng thích nghi cao trong môi trường sống đa dạng.",
        thuvien: [
            "images/cao/cao_1.jpg",
            "images/cao/cao_2.jpg",
            "images/cao/cao_3.jpg",
            "images/cao/cao_4.jpeg",
            "images/cao/cao_5.jpg",
            "images/cao/cao_6.jpg"
        ]
    },
    {
        ten: "chồn",
        anh: "images/chon/chon_1.jpg",
        mota: "Chồn là loài động vật nhỏ, nhanh nhẹn thuộc họ Chồn, nổi bật với bộ lông mềm mại và khả năng săn mồi tinh vi trong môi trường sống tự nhiên.",
        thuvien: [
            "images/chon/chon_1.jpg",
            "images/chon/chon_2.jpg",
            "images/chon/chon_3.jpg",
            "images/chon/chon_4.jpg",
            "images/chon/chon_5.jpg",
            "images/chon/chon_6.jpg"
        ]
    },
    {
        ten: "Chuột",
        anh: "images/chuot/chuot_1.jpg",
        mota: "Chuột là loài động vật gặm nhấm nhỏ, phổ biến trên toàn thế giới, nổi bật với khả năng sinh sản nhanh và thích nghi tốt với môi trường sống đa dạng.",
        thuvien: [
            "images/chuot/chuot_1.jpg",
            "images/chuot/chuot_2.jpg",
            "images/chuot/chuot_3.jpg",
            "images/chuot/chuot_4.jpg",
            "images/chuot/chuot_5.jpg",
            "images/chuot/chuot_6.jpg"
        ]
    },
    {
        ten: "hươu",
        anh: "images/huou/huou_5.jpg",
        mota: "Hươu là loài động vật có vú thuộc họ Hươu nai, nổi bật với bộ lông mượt mà và những chiếc sừng phân nhánh đặc trưng ở con đực.",
        thuvien: [
            "images/huou/huou_1.jpg",
            "images/huou/huou_5.jpg",
            "images/huou/huou_3.jpg",
            "images/huou/huou_4.jpg",
            "images/huou/huou_2.jpg",
            "images/huou/huou_6.jpg"
        ]
    },
    {
        ten: "Khỉ",
        anh: "images/khi/khi_3.jpg",
        mota: "Khỉ là loài động vật linh trưởng thông minh, sống thành bầy đàn và có khả năng sử dụng công cụ để tìm kiếm thức ăn và giải quyết các vấn đề trong môi trường sống.",
        thuvien: [
            "images/khi/khi_1.jpg",
            "images/khi/khi_2.jpg",
            "images/khi/khi_3.jpg",
            "images/khi/khi_4.jpg",
            "images/khi/khi_5.jpg",
            "images/khi/khi_6.jpg"
        ]
    }
];
const animalListDiv = document.getElementById('animalList');

if (animalListDiv) {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        card.addEventListener("click",() =>{
            localStorage.setItem('selectedAnimal', JSON.stringify(animal));
            window.location.href = 'detail.html';
        });
        animalListDiv.appendChild(card);
    });
}
