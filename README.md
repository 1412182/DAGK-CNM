# DAGK-CNM
* File này có nội dung là cấu hình, quy tắc coding, và cấu trúc của app. Cần đọc qua để dễ dàng nắm hơn. 
* I. Cấu hình 
    1. File .env
        - Tạo 1 file đặt tên là .env (file này sẽ bỏ trong .gitignore => sẽ không được commit lên github).
        - Copy nội dung file .env.example bỏ vào trong file .env.
        - Thay đổi nội dung vừa copy theo hướng dẫn trong file .env.example.
* II. Quy tắc coding
    Quy tắc lập ra để code gọn gàng, sạch sẽ, dễ nắm luồng của app hơn nên cần tuân thủ.
    * Quy tắc khi code: 
        - Quy tắc comment
            + Trước mỗi function phải comment function có chức năng gì.
            + Comment càng nhiều càng tốt, tránh quên mất đoạn đó code gì :v.

        - Quy tắc đặt tên biến:
            + Hạn chế sử dụng biến kiểu var (sử dụng const và let).
            + Tên biến phải có ý nghĩa.
            + Chữ cái của từ đầu tiên viết thường, chữ cái đầu của các từ tiếp theo viết in hoa VD: simpleVariable.
        - Quy tắc thêm function:
            + Khi thêm function mới thì thêm vào cuối file để tránh conflict gây tốn thời gian không cần thiết.
        - Quy tắc khác:
            + Đầu file js đều phải thêm 'use strict'.
            + Tất cả các file js tạo ra tên các chữ cái đầu tiên của mỗi từ sẽ viết in hoa.
            + Tất cả các url các chữ cái đầu tiên của mỗi từ sẽ viết in hoa.
* III. Cấu trúc của app
    1. Controller: chứa các controller của app.
    2. Common: Chứa các file chung.
    3. Repository: Chứa các file thao tác với database (get, update, delete data).
    4. Views: Chứa các file html.
    5. Public: Chứa các file css, js, image.
    6. Config: Chứa các file cấu hình.