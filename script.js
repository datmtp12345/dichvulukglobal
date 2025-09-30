document.querySelectorAll('.lv').forEach(item => {
    item.addEventListener('click', () => {
        const lv = item.dataset.lv;
        const details = {
            1: "LV1: Đây là cấp độ làm quen. Các em sẽ tập trung làm quen với cách trình bày và giao tiếp. Video ở mức này gồm hai phần quan trọng là Check 1 và Check 2, được gửi riêng qua link để học viên xem trước. Mục tiêu là giúp các em làm quen với hình thức trình bày bằng video.",
            2: "LV2: Ở cấp độ này, ngoài việc gửi video riêng và thực hiện Check 1 hoặc Check 2, các em sẽ bắt đầu sử dụng video trong bài thuyết trình chính. Video này thường là một đoạn nhạc hoặc clip ngắn, đặt ở đầu hoặc cuối bài thuyết trình, để mở đầu hoặc kết thúc slide một cách sinh động.",
            3: "LV3: Đây là cấp độ thuyết trình nâng cao, yêu cầu sáng tạo nội dung hơn. Các em vẫn làm như LV2 nhưng cần thêm yếu tố cá nhân hóa, ví dụ như chế nhạc, thay đổi lời, hoặc thêm phần sáng tạo để video trở nên độc đáo hơn, thể hiện cá tính riêng.",
            4: "LV4: LV4: Cấp độ debate. Các em sẽ dùng video như ở LV2, kết hợp với slide để trình bày nội dung debate. Video sẽ đặt ở đầu bài và gồm hai phần: (1) Story — giới thiệu nội dung video, (2) Phần News — nội dung chính của debate. Trong phần debate, sẽ có 2 MC dẫn dắt, trình bày và thảo luận về 3 nội dung News.",
            5: "LV5: Ở cấp độ cao nhất, các em sẽ trình bày giải pháp và giới thiệu sản phẩm mang tính đặc trưng của Việt Nam. Cách trình bày tương tự các LV trước nhưng video sẽ được cung cấp trước, chứa nội dung liên quan trực tiếp tới giải pháp và sản phẩm Việt Nam, để các em tập trung vào phân tích, thuyết trình và đề xuất."
        };
        const detailBox = document.createElement('div');
        detailBox.classList.add('detail-popup');
        detailBox.innerHTML = `
            <div class="popup-content">
                <span class="close">&times;</span>
                <h2>Chi tiết LV${lv}</h2>
                <p>${details[lv]}</p>
            </div>
        `;
        document.body.appendChild(detailBox);

        detailBox.querySelector('.close').onclick = () => {
            detailBox.remove();
        };
    });
});
