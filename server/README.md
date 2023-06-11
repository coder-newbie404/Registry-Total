# CÁCH REQUEST BACKEND

- request bằng axios như cái guide routing
- cổng 4000
- URL cho từng request:
    + Thêm acc mới: POST '/newacc'
        - axios param:    
            - acc: tên tk
            - pwd: mk
            - phone: sdt
            - email: email
        - return : "inserted data.." || error?
    + Thêm trung tâm đăng kiểm: POST '/newregisloc'
        axios param:    unit: mã đơn vị
                        addr: địa chỉ
        return : "inserted data.." || error?
    + Thêm chứng nhận đăng kiểm: POST '/newcerti'
        axios param:    regisPlate  : Biển số
                        regisDate   : Ngày dk biển
                        brd         : Hãng xe
                        owner       : Chủ sở hữu
                        addr        : Địa chỉ
                        ispDate     : Ngày kiểm định
                        unit        : mã đơn vị kd
                        ispNum      : Mã kd
                        cerExpr     : Ngày hết hạn kd
        return : "inserted data.." || error?
    + Lấy thông tin để xác thực đăng nhập: POST "/auth"
        axios param:    acc: tên tk
                        pwd: mk
        return : response là kết quả tìm kiếm (ko phải json) gồm "_id" và các phần tử trong AccountDataSchema.js
    + Lấy danh sách trung tâm dk: GET "/regisloclst"
        return : response là kết quả tìm kiếm (ko phải json) gồm "_id" và các phần tử trong InspectionUnitFormDataSchema.js
    + Lấy danh sách phương tiện dk: GET "/vehicleslst"
        return : response là kết quả tìm kiếm (ko phải json) gồm "_id" và các phần tử trong VehicleFormDataSchema.js
     
!!! KHÔNG SỬA BẤT KỲ CÁI GÌ TRONG SERVER VÀ DATABASE !!!
vì t ko fix dc
