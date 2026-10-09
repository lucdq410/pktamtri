// Nội dung 6 dịch vụ. Mỗi dịch vụ có `content` là danh sách khối nội dung:
//   { type: 'p' | 'h2' | 'h3' | 'quote', text }
//   { type: 'ul', items: [ 'chuỗi' | { title, text } ] }
//   { type: 'cards', items: [ { title, text?, items? } ] }
//   { type: 'steps', items: [ { title, text } ] }
//   { type: 'timeline', items: [ { label, title, text?, items? } ] }

export const services = [
  {
    slug: 'kham-thai-dinh-ky',
    icon: 'Stethoscope',
    title: 'Khám thai định kỳ',
    tagline: 'Đảm bảo sự phát triển khỏe mạnh của mẹ và bé',
    summary:
      'Bác sĩ thực hiện các xét nghiệm cần thiết để xác định thai kỳ, theo dõi sự phát triển của thai nhi và đảm bảo sức khỏe của mẹ và bé.',
    content: [
      {
        type: 'p',
        text: 'Ai trong chúng ta khi làm mẹ, khoảng thời gian đầu lúc mang thai là những giây phút thiêng liêng và hạnh phúc nhất. Trong giai đoạn này, khám thai định kỳ là dịch vụ được đa số mẹ bầu đăng ký nhằm đảm bảo sự phát triển khỏe mạnh cho cả mẹ và bé. Dưới đây, Phòng khám Sản Phụ Khoa Tâm Trí chia sẻ chi tiết lịch khám thai cùng những cột mốc quan trọng giúp mẹ an tâm tận hưởng thai kỳ khỏe mạnh.',
      },
      { type: 'h2', text: 'Lịch khám thai định kỳ' },
      {
        type: 'cards',
        items: [
          { title: '3 tháng đầu', text: 'Kiểm tra sức khỏe mẹ, xét nghiệm cơ bản và siêu âm đầu tiên.' },
          { title: '3 tháng giữa', text: 'Siêu âm 3D, tầm soát dị tật, kiểm tra các chỉ số sức khỏe của thai nhi.' },
          { title: '3 tháng cuối', text: 'Đánh giá sự phát triển của bé, chuẩn bị cho việc sinh nở.' },
        ],
      },
      { type: 'h2', text: 'Chi tiết các lần khám thai' },
      {
        type: 'timeline',
        items: [
          {
            label: 'Tuần 5 – 8',
            title: 'Lần khám đầu tiên',
            text: 'Siêu âm và làm các xét nghiệm cần thiết để xác định có thai, vị trí làm tổ và nhịp tim thai.',
            items: [
              'Siêu âm xác định vị trí phôi thai và tim thai.',
              'Xét nghiệm máu kiểm tra thiếu máu và các bệnh lý như viêm gan B, C, HIV/AIDS.',
              'Kiểm tra cân nặng, chiều cao để tính chỉ số BMI.',
              'Tính tuổi thai và ngày dự sinh.',
            ],
          },
          {
            label: 'Tuần 8 – 10',
            title: 'Lần khám thứ hai',
            text: 'Kiểm tra toàn diện tim thai, phôi thai và thực hiện các xét nghiệm cơ bản nếu chưa làm ở lần đầu.',
          },
          {
            label: 'Tuần 11 – 13⁺⁶',
            title: 'Lần khám thứ ba',
            text: 'Tầm soát dị tật bẩm sinh, bất thường cấu trúc thai nhi và nhiễm sắc thể qua siêu âm và xét nghiệm máu.',
          },
          {
            label: 'Tuần 16 – 18',
            title: 'Lần khám thứ tư',
            text: 'Kiểm tra sự phát triển của thai qua siêu âm, đo chiều dài kênh cổ tử cung nếu có nguy cơ sinh non.',
          },
          {
            label: 'Tuần 20 – 24',
            title: 'Lần khám thứ năm',
            text: 'Siêu âm hình thái thai nhi, tầm soát dị tật. Thời điểm tiêm vắc xin uốn ván mũi đầu tiên.',
          },
          {
            label: 'Tuần 24 – 28',
            title: 'Lần khám thứ sáu',
            text: 'Kiểm tra sức khỏe thai nhi và xét nghiệm đường huyết tầm soát tiểu đường thai kỳ.',
          },
          {
            label: 'Tuần 28 – 32',
            title: 'Lần khám thứ bảy',
            text: 'Tiếp tục siêu âm kiểm tra hình thái thai nhi và các bất thường có thể phát sinh vào cuối thai kỳ.',
          },
          {
            label: 'Tuần 32 – 36',
            title: 'Lần khám thứ tám',
            text: 'Theo dõi sự phát triển và kiểm tra ngôi thai. Mẹ bầu cần khám mỗi tuần trong giai đoạn này.',
          },
          {
            label: 'Tuần 36 – 40',
            title: 'Lần khám thứ chín',
            text: 'Kiểm tra vị trí thai và sự phát triển cuối cùng trước sinh, đánh giá cổ tử cung và khả năng sinh thường.',
          },
        ],
      },
      { type: 'h2', text: 'Lưu ý khi đi khám thai định kỳ' },
      {
        type: 'ul',
        items: [
          'Khám thai đúng lịch hẹn.',
          'Mặc trang phục thoải mái.',
          'Uống nước và tiểu tiện trước khi siêu âm theo hướng dẫn.',
          'Ăn uống hợp lý trước khi khám thai.',
          'Vệ sinh cơ thể sạch sẽ.',
          'Chuẩn bị đủ giấy tờ, sổ khám thai cần thiết.',
        ],
      },
    ],
  },
  {
    slug: 'sieu-am-3d-4d',
    icon: 'ScanHeart',
    title: 'Siêu âm 3D/4D',
    tagline: 'Theo dõi sự phát triển của thai nhi với công nghệ tiên tiến',
    summary:
      'Hệ thống máy siêu âm hiện đại giúp bác sĩ nhìn rõ hình ảnh và kiểm tra các thông số về sự phát triển, tim mạch, cân nặng và cấu trúc bên trong thai nhi.',
    content: [
      { type: 'h2', text: 'Siêu âm 3D, 4D là gì?' },
      {
        type: 'cards',
        items: [
          {
            title: 'Siêu âm 3D',
            text: 'Siêu âm 3 chiều với nhiều góc độ khác nhau, có thể chụp hàng nghìn hình ảnh. Không chỉ soi được nội tạng, các mô của thai nhi mà còn thấy rõ khuôn mặt bé.',
          },
          {
            title: 'Siêu âm 4D',
            text: '3 chiều không gian và 1 chiều thời gian. Mẹ thấy được mặt mũi, chân tay, cử chỉ của bé dưới dạng ảnh và video; bác sĩ phát hiện sớm dị tật và nguy cơ bất thường.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'Khi nào nên chọn 3D hay 4D? Mẹ có thể chọn siêu âm 3D khi điều kiện tài chính vừa phải và không nhất thiết cần video chuyển động của con trong bụng.',
      },
      { type: 'h2', text: 'Lợi ích của siêu âm 3D, 4D' },
      {
        type: 'ul',
        items: [
          'Hình ảnh, video rõ nét, quan sát em bé từ nhiều góc độ và cung cấp nhiều thông tin hơn siêu âm 2D.',
          'Siêu âm 4D hiển thị chuỗi hình ảnh liên tục – ba mẹ thấy bé mỉm cười, cử động tay chân hay mút ngón tay.',
          'Hỗ trợ xác định giới tính thai nhi; độ chính xác khoảng 90% sau 16 tuần nếu bé nằm ở vị trí thuận lợi.',
          'Số lần siêu âm phụ thuộc vào sức khỏe mẹ và tình trạng thai nhi, theo chỉ định của bác sĩ.',
        ],
      },
      { type: 'h2', text: 'Nguyên lý hoạt động của siêu âm màu 4D' },
      {
        type: 'steps',
        items: [
          { title: 'Đặt đầu dò', text: 'Bác sĩ dùng thiết bị đầu dò để kiểm tra vùng bụng của mẹ bầu.' },
          { title: 'Truyền sóng âm', text: 'Đầu dò di chuyển dọc theo bụng mẹ, truyền sóng âm qua bụng và tử cung.' },
          { title: 'Phản xạ âm vang', text: 'Sóng siêu âm phản xạ lại từ cơ thể bé dưới dạng âm vang.' },
          { title: 'Hiển thị hình ảnh', text: 'Máy ghi nhận dữ liệu tần số, xử lý và hiển thị lên màn hình.' },
        ],
      },
      { type: 'h2', text: 'Các mốc siêu âm 3D/4D quan trọng' },
      {
        type: 'timeline',
        items: [
          {
            label: '12 tuần',
            title: 'Thời điểm vàng đo độ mờ da gáy',
            text: 'Kiểm tra bất thường nhiễm sắc thể như hội chứng Down.',
            items: [
              'Hình thái tổng thể: thai dài khoảng 55mm, nặng ~50g, nhịp tim 120 – 160 lần/phút.',
              'Vị trí thai, số lượng thai, dự tính ngày sinh, phát hiện dị tật tứ chi và đánh giá sức khỏe sản phụ.',
            ],
          },
          {
            label: '22 tuần',
            title: 'Quan sát hình thái chi tiết',
            text: 'Bé nặng khoảng 430g, dài ~26,7cm – các bộ phận đã phát triển và hoàn thiện.',
            items: [
              'Phát hiện hở hàm ếch, sứt môi, dị dạng hình thái.',
              'Dị tật thần kinh, đầu, lồng ngực, tim; bệnh lý ổ bụng như teo thực quản, tắc ruột.',
            ],
          },
          {
            label: '32 tuần',
            title: 'Đánh giá trước ngày dự sinh',
            text: 'Phát hiện bất thường về động mạch, hệ tiêu hóa, tim hay cấu trúc não; thai chậm phát triển, phù nhau thai.',
            items: ['Đánh giá nhau thai và tình trạng nước ối, chuẩn bị tiến tới ngày dự sinh.'],
          },
        ],
      },
    ],
  },
  {
    slug: 'goi-cham-soc-thai-ky-toan-dien',
    icon: 'Baby',
    title: 'Gói chăm sóc thai kỳ toàn diện',
    tagline: 'Chăm sóc từ khi thai kỳ bắt đầu, cho đến khi bé chào đời khỏe mạnh',
    summary:
      'Mẹ được tư vấn, thăm khám và chăm sóc đặc biệt với các dịch vụ từ A đến Z – từ khi bắt đầu mang thai, sinh nở cho đến sau sinh.',
    featured: true,
    content: [
      {
        type: 'p',
        text: 'Khoảng thời gian đầu mang thai là những giây phút thiêng liêng và hạnh phúc nhất, nhưng cũng đi kèm rất nhiều băn khoăn – đặc biệt với những mẹ lần đầu làm mẹ. Gói chăm sóc thai kỳ toàn diện tại Tâm Trí là lựa chọn lý tưởng cho “tập đầu” của hành trình này.',
      },
      {
        type: 'p',
        text: 'Gói bao gồm các dịch vụ từ A đến Z để hỗ trợ và đảm bảo sức khỏe của mẹ và bé trong suốt quá trình mang thai, sinh nở và sau sinh:',
      },
      {
        type: 'cards',
        items: [
          {
            title: 'Thăm khám & theo dõi thai kỳ',
            items: [
              'Khám thai định kỳ: mỗi 4 tuần ở tam cá nguyệt đầu, 2–3 tuần ở tam cá nguyệt hai và mỗi tuần ở tam cá nguyệt cuối.',
              'Siêu âm 3D/4D định kỳ theo từng giai đoạn; đo độ mờ da gáy (tuần 11–14).',
            ],
          },
          {
            title: 'Xét nghiệm & kiểm tra sức khỏe mẹ',
            items: [
              'Xét nghiệm máu: nhóm máu, công thức máu, sàng lọc viêm gan B, HIV, giang mai; thiếu máu, đường huyết, tiểu đường thai kỳ.',
              'Xét nghiệm nước tiểu; theo dõi huyết áp, cân nặng và dấu hiệu tiền sản giật.',
            ],
          },
          {
            title: 'Tiêm chủng',
            items: ['Tiêm ngừa uốn ván cho mẹ (2 mũi).', 'Tư vấn và hỗ trợ các loại vắc-xin cần thiết trước và sau sinh.'],
          },
          {
            title: 'Dinh dưỡng & chăm sóc thai kỳ',
            items: [
              'Tư vấn chế độ ăn uống phù hợp từng giai đoạn.',
              'Hướng dẫn vận động, luyện tập nhẹ nhàng (yoga…).',
              'Hỗ trợ tâm lý, giảm căng thẳng và lo âu khi mang thai.',
            ],
          },
          {
            title: 'Chuẩn bị cho sinh nở',
            items: [
              'Tư vấn sinh thường hoặc sinh mổ, lập kế hoạch sinh.',
              'Kiến thức tiền sản: quá trình sinh, chăm sóc trẻ sơ sinh, hồi phục sau sinh.',
              'Tư vấn lựa chọn bệnh viện, phòng sinh phù hợp.',
            ],
          },
          {
            title: 'Chăm sóc sau sinh',
            items: [
              'Kiểm tra sức khỏe mẹ sau sinh (tử cung, vết mổ nếu có).',
              'Tư vấn nuôi con bằng sữa mẹ.',
              'Kiểm tra sức khỏe bé sơ sinh: sàng lọc, tiêm ngừa, theo dõi phát triển.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'tam-soat-ung-thu-phu-khoa',
    icon: 'ShieldCheck',
    title: 'Tầm soát ung thư phụ khoa',
    tagline: 'Phát hiện sớm ung thư cổ tử cung, ung thư buồng trứng',
    summary:
      'Phát hiện sớm các bệnh lý nguy hiểm như ung thư cổ tử cung, ung thư buồng trứng để chẩn đoán và điều trị kịp thời.',
    content: [
      {
        type: 'p',
        text: 'Ung thư phụ khoa đang có xu hướng gia tăng và trẻ hóa. Triệu chứng thường khó nhận biết, vì vậy chị em cần chủ động phòng ngừa và phát hiện sớm bằng cách tầm soát định kỳ – tránh nguy cơ bệnh tiến triển và tốn kém chi phí điều trị về sau.',
      },
      { type: 'h2', text: 'Tầm soát ung thư phụ khoa là gì?' },
      {
        type: 'p',
        text: 'Ung thư phụ khoa có 5 loại phổ biến xuất phát từ cơ quan sinh sản nữ: tử cung, cổ tử cung, buồng trứng, âm đạo và âm hộ. Tầm soát là phương pháp giúp phát hiện sớm tế bào ung thư ngay khi chưa có triệu chứng biểu hiện ra bên ngoài.',
      },
      { type: 'h2', text: 'Vì sao cần tầm soát?' },
      {
        type: 'ul',
        items: [
          'Đánh giá tình trạng cơ thể hiện tại, phát hiện sớm mầm mống ung thư và nguy cơ tiềm ẩn trước khi bệnh khởi phát.',
          'Tăng hiệu quả điều trị khi phát hiện sớm, ngăn ngừa biến chứng nguy hiểm.',
          'Được bác sĩ tư vấn lối sống khoa học, chế độ ăn lành mạnh.',
          'Tiết kiệm thời gian và chi phí điều trị khi bệnh ở giai đoạn đầu.',
        ],
      },
      { type: 'h2', text: 'Tầm soát gồm những gì?' },
      {
        type: 'cards',
        items: [
          { title: 'Khám phụ khoa & tuyến vú', text: 'Kiểm tra cơ bản về phụ khoa và tuyến vú.' },
          {
            title: 'Xét nghiệm & cận lâm sàng',
            text: 'Phát hiện sớm ung thư cổ tử cung, nhân xơ, đa nang, polyp cổ tử cung… cùng các bệnh lây truyền qua đường tình dục có thể làm tăng nguy cơ ung thư.',
          },
        ],
      },
      { type: 'h2', text: 'Ai nên tầm soát ung thư phụ khoa?' },
      {
        type: 'ul',
        items: [
          'Phụ nữ có nhu cầu sàng lọc ung thư cổ tử cung, tử cung, buồng trứng và các bệnh lý phụ khoa khác.',
          'Phụ nữ có kinh nguyệt sớm, mãn kinh muộn.',
          'Gia đình có tiền sử ung thư phụ khoa.',
          'Có tiền sử ung thư vú, ung thư cổ tử cung, ung thư âm hộ…',
          'Không có con hoặc sinh con đầu lòng muộn (sau 35 tuổi).',
        ],
      },
      {
        type: 'quote',
        text: 'Tâm lý e ngại, xấu hổ khiến nhiều chị em ít khám phụ khoa định kỳ. Khi phát hiện, bệnh thường đã chuyển nặng. Tầm soát định kỳ là điều mỗi chúng ta đều nên thực hiện.',
      },
    ],
  },
  {
    slug: 'tu-van-tien-san-va-tien-hon-nhan',
    icon: 'HeartHandshake',
    title: 'Tư vấn tiền sản và tiền hôn nhân',
    tagline: 'Giúp các cặp đôi chuẩn bị tốt cho hôn nhân và sinh con',
    summary:
      'Thông qua các xét nghiệm sức khỏe cho cả nam và nữ, bác sĩ xác định những vấn đề tiềm ẩn có thể ảnh hưởng đến khả năng sinh sản của cặp đôi.',
    content: [
      { type: 'h2', text: 'Tư vấn tiền hôn nhân' },
      {
        type: 'p',
        text: 'Khám sức khỏe tiền hôn nhân là quy trình thăm khám tổng quát và xét nghiệm sàng lọc cho cặp đôi sắp cưới. Từ kết quả, bác sĩ xác định các vấn đề tiềm ẩn có thể ảnh hưởng đến khả năng sinh sản – bao gồm yếu tố di truyền, bệnh truyền nhiễm và các bệnh lây truyền qua đường tình dục.',
      },
      { type: 'h3', text: 'Vì sao nên khám tiền hôn nhân?' },
      {
        type: 'ul',
        items: [
          'Xây dựng cuộc sống hôn nhân khỏe mạnh, hạnh phúc.',
          'Ngăn ngừa các bệnh lây truyền qua đường tình dục.',
          'Tránh di truyền bệnh của bố mẹ sang con cái.',
          'Hỗ trợ kế hoạch hóa gia đình và quản lý sức khỏe sinh sản.',
          'Chuẩn bị tâm lý cho cuộc sống sau hôn nhân.',
        ],
      },
      { type: 'h3', text: 'Khám tiền hôn nhân gồm những gì?' },
      {
        type: 'cards',
        items: [
          {
            title: 'Dành cho nam',
            items: [
              'Khám tổng quát: huyết áp, chỉ số cơ thể, tiền sử bệnh; xét nghiệm máu, sinh hóa máu, nước tiểu, viêm gan; siêu âm ổ bụng.',
              'Khám sinh sản: khám bộ phận sinh dục, tinh dịch đồ, siêu âm tinh hoàn, nội tiết tố, xét nghiệm bệnh lây truyền qua đường tình dục.',
            ],
          },
          {
            title: 'Dành cho nữ',
            items: [
              'Khám tổng quát: huyết áp, chỉ số cơ thể, tiền sử bệnh; xét nghiệm máu, sinh hóa máu, nước tiểu, viêm gan; siêu âm ổ bụng.',
              'Khám sinh sản: siêu âm phụ khoa, tuyến vú, soi tươi dịch âm đạo, sàng lọc di truyền, nội tiết; tư vấn vắc xin trước mang thai hoặc biện pháp tránh thai phù hợp.',
            ],
          },
        ],
      },
      { type: 'h2', text: 'Tư vấn tiền sản' },
      {
        type: 'p',
        text: 'Khám tiền sản giúp kiểm tra sức khỏe vợ chồng – đặc biệt là người vợ – trước khi mang thai, phát hiện sớm những bất thường có thể đe dọa mẹ và bé, đồng thời được bác sĩ tư vấn thời điểm mang thai phù hợp để thai kỳ an toàn, khỏe mạnh hơn.',
      },
      { type: 'h3', text: 'Vì sao nên khám tiền sản?' },
      {
        type: 'ul',
        items: [
          'Có thêm kiến thức, sự tự tin và thoải mái trong đời sống vợ chồng.',
          'Tầm soát các bệnh lây truyền như viêm gan B, giang mai, lậu, HIV – không lây cho bạn đời và con.',
          'Kiểm tra sức khỏe tổng quát, chuẩn bị mang thai khoa học.',
          'Đánh giá nguy cơ hiếm muộn để can thiệp kịp thời.',
        ],
      },
      { type: 'h3', text: 'Khám tiền sản gồm 3 hạng mục chính' },
      {
        type: 'steps',
        items: [
          { title: 'Sức khỏe tổng quát', text: 'Đánh giá thể trạng chung của cả hai vợ chồng.' },
          { title: 'Sức khỏe sinh sản', text: 'Kiểm tra cơ quan sinh sản, nội tiết và khả năng thụ thai.' },
          { title: 'Yếu tố di truyền', text: 'Đánh giá yếu tố gen có thể ảnh hưởng đến thai nhi.' },
        ],
      },
    ],
  },
  {
    slug: 'ho-tro-sinh-san-va-tu-van-hiem-muon',
    icon: 'Sprout',
    title: 'Hỗ trợ sinh sản và tư vấn hiếm muộn',
    tagline: 'Giải pháp cho các cặp đôi gặp khó khăn trong việc thụ thai',
    summary:
      'Khám hiếm muộn giúp chẩn đoán nguyên nhân và tư vấn phương pháp hỗ trợ phù hợp nhất cho từng cặp vợ chồng.',
    content: [
      {
        type: 'p',
        text: 'Tỷ lệ hiếm muộn ngày càng gia tăng và có dấu hiệu trẻ hóa. Theo một số thống kê, khoảng 7,7% các cặp vợ chồng tại Việt Nam gặp tình trạng hiếm muộn, vô sinh – khiến không ít gia đình lo lắng, phiền muộn. Hãy cùng Tâm Trí tìm hiểu giải pháp cho các cặp đôi hiếm muộn.',
      },
      { type: 'h2', text: 'Hiếm muộn là gì?' },
      {
        type: 'quote',
        text: 'Theo WHO, hiếm muộn là khi cặp vợ chồng chung sống, quan hệ đều đặn, không dùng biện pháp tránh thai nhưng sau 1 năm (vợ dưới 35 tuổi) hoặc 6 tháng (vợ trên 35 tuổi) vẫn chưa có thai tự nhiên.',
      },
      { type: 'h2', text: 'Chẩn đoán hiếm muộn tại Tâm Trí' },
      {
        type: 'p',
        text: 'Tùy từng cặp vợ chồng, qua khám lâm sàng và xét nghiệm, bác sĩ sẽ tư vấn phương pháp phù hợp nhất. Khám hiếm muộn bao gồm:',
      },
      {
        type: 'ul',
        items: [
          { title: 'Khám lâm sàng', text: 'Thăm hỏi dấu hiệu, tiền sử và thăm khám.' },
          {
            title: 'Siêu âm tử cung – buồng trứng',
            text: 'Đánh giá bất thường cấu trúc tử cung, vòi trứng ứ dịch và các nang trứng.',
          },
          {
            title: 'Đánh giá dự trữ buồng trứng',
            text: 'Xét nghiệm FSH, estrogen ngày 2 vòng kinh hoặc AMH; siêu âm đếm nang trứng đầu chu kỳ (AFC).',
          },
          {
            title: 'Định lượng hormone',
            text: 'Phát hiện mất cân bằng nội tiết như hội chứng buồng trứng đa nang (PCOS) gây rối loạn rụng trứng.',
          },
          { title: 'Chụp HSG', text: 'Đánh giá buồng tử cung và sự thông thương của hai vòi trứng.' },
          { title: 'Tinh dịch đồ', text: 'Đánh giá số lượng và chất lượng tinh trùng.' },
        ],
      },
      {
        type: 'p',
        text: 'Bác sĩ có thể chỉ định thêm prolactin, TSH, FT3, FT4… để đánh giá các bệnh nội tiết ảnh hưởng đến kinh nguyệt.',
      },
      { type: 'h2', text: 'Các phương pháp điều trị hiếm muộn' },
      {
        type: 'cards',
        items: [
          { title: 'Thuốc hỗ trợ sinh sản' },
          { title: 'Phẫu thuật' },
          { title: 'IUI', text: 'Thụ tinh trong tử cung' },
          { title: 'IVF', text: 'Thụ tinh trong ống nghiệm' },
          { title: 'ICSI', text: 'Tiêm tinh trùng vào bào tương noãn' },
          { title: 'IVM', text: 'Trưởng thành trứng non' },
          { title: 'Trữ lạnh', text: 'Phôi, noãn và tinh trùng' },
        ],
      },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
