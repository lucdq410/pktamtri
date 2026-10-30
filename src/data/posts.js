// Bài viết "Kiến thức". Thêm bài mới lên đầu danh sách; `content` dùng cùng định dạng khối như services.js.

export const posts = [
  {
    slug: 'me-bau-hoi-bac-tam-giai-dap-moi-lan-di-kham-thai-lai-do-tim-thai',
    title: 'Mẹ bầu hỏi – Bác Tâm giải đáp: Mỗi lần khám thai lại đo tim thai, có cần thiết không?',
    date: '2025-11-21',
    category: 'Hỏi đáp',
    icon: 'HeartPulse',
    // Ảnh mẫu tạm thời (Wikimedia Commons) – thay bằng ảnh của phòng khám khi có
    image: {
      src: '/images/kien-thuc/me-bau-hoi.webp',
      author: 'NIAID',
      license: 'CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Pregnant_woman_(43338546905).jpg',
    },
    excerpt:
      'Đo CTG (Cardiotocography) – hay còn gọi là monitoring – giúp bác sĩ theo dõi nhịp tim thai và cơn gò tử cung, từ đó đánh giá em bé có đang khỏe mạnh hay không.',
    tags: ['Khám thai định kỳ', 'CTG', 'Gói chăm sóc thai kỳ'],
    content: [
      { type: 'p', text: 'Bác sĩ Tâm giải thích để mẹ bầu hiểu rõ hơn nhé!' },
      {
        type: 'p',
        text: 'Đo CTG (Cardiotocography) – hay còn gọi là monitoring – là một kỹ thuật rất quan trọng. Kỹ thuật này giúp bác sĩ theo dõi nhịp tim thai và cơn gò tử cung, từ đó đánh giá xem em bé có đang khỏe mạnh không.',
      },
      { type: 'h2', text: 'Khi nào mẹ bầu cần đo CTG?' },
      {
        type: 'p',
        text: 'Thông thường, CTG được chỉ định từ tuần thai thứ 32 trở đi, khi thai nhi đã đủ lớn để có phản xạ tim mạch ổn định và rõ ràng. Trường hợp đặc biệt, bác sĩ có thể chỉ định đo từ tuần 28 nếu có các yếu tố nguy cơ như:',
      },
      {
        type: 'ul',
        items: [
          'Thai máy yếu, thai ít cử động.',
          'Tiền sản giật, tiểu đường thai kỳ, cao huyết áp.',
          'Thai chậm phát triển trong tử cung (IUGR).',
          'Tiền sử thai lưu, biến chứng ở thai kỳ trước.',
          'Đa ối, thiểu ối, dây rốn quấn cổ, nhau thai bất thường.',
        ],
      },
      {
        type: 'p',
        text: 'Ngoài ra, khi mẹ chuyển dạ – nhất là giai đoạn tích cực – CTG sẽ được theo dõi liên tục để kiểm tra phản ứng của thai với cơn gò.',
      },
      { type: 'h2', text: 'Tại sao mẹ bầu cần được đo CTG?' },
      {
        type: 'p',
        text: 'Đây là cách theo dõi chính xác, khách quan tình trạng thai nhi: nhịp tim thai có đều không, có dấu hiệu suy thai hay thiếu oxy không, thai có phản ứng bình thường khi có cơn gò không. CTG là “người bạn đồng hành” của bác sĩ sản khoa, giúp đưa ra các quyết định quan trọng:',
      },
      {
        type: 'ul',
        items: ['Có cần tiếp tục theo dõi thai không?', 'Có nên sinh ngay hay chuyển viện?', 'Mẹ có thể sinh thường hay cần mổ lấy thai?'],
      },
      {
        type: 'quote',
        text: 'Tại Phòng khám Sản phụ khoa Tâm Trí, mẹ bầu được theo dõi CTG bằng máy monitor hiện đại, cho kết quả chính xác, nhanh chóng và hoàn toàn an toàn cho mẹ và bé.',
      },
    ],
  },
  {
    slug: 'phai-lam-gi-khi-me-bau-phat-hien-bach-cau-trong-mau-tang',
    title: 'Phải làm gì khi mẹ bầu phát hiện bạch cầu trong máu tăng?',
    date: '2025-11-20',
    category: 'Xét nghiệm',
    icon: 'FlaskConical',
    // Ảnh mẫu tạm thời (Wikimedia Commons) – thay bằng ảnh của phòng khám khi có
    image: {
      src: '/images/kien-thuc/bach-cau.webp',
      author: 'Vegasjon',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Blood_donation_(test_tubes).JPG',
    },
    excerpt:
      '9 tháng 10 ngày mang thai đem lại nhiều thay đổi. Tăng bạch cầu là thay đổi chỉ có thể phát hiện qua xét nghiệm máu – vậy mẹ cần làm gì?',
    tags: ['Xét nghiệm máu', 'Sức khỏe mẹ bầu'],
    content: [
      {
        type: 'p',
        text: 'Khoảng thời gian 9 tháng 10 ngày mang thai đem lại cho mẹ bầu nhiều thay đổi về thể chất và tâm lý. Tuy nhiên, sự biến đổi về huyết học – điển hình là tình trạng tăng số lượng bạch cầu – chỉ có thể phát hiện khi đi khám hoặc xét nghiệm máu.',
      },
      {
        type: 'p',
        text: 'Bạch cầu trong máu tăng không phải là tình trạng hiếm gặp, cho thấy cơ thể mẹ đang tăng cường hệ miễn dịch để chống lại viêm nhiễm. Vậy nếu bạch cầu tăng, mẹ cần làm gì? BS CKII Đỗ Văn Tâm sẽ giúp mẹ giải đáp.',
      },
      { type: 'h2', text: 'Nguyên nhân bạch cầu trong máu tăng cao' },
      {
        type: 'p',
        text: 'Khi mang thai, chỉ số bạch cầu của mẹ thường cao hơn người bình thường. Tình trạng bạch cầu cao có thể do:',
      },
      { type: 'ul', items: ['Nhiễm trùng.', 'Căng thẳng.', 'Viêm hoặc dị ứng.', 'Liên quan đến bệnh lý khác.'] },
      { type: 'h2', text: 'Bạch cầu tăng cao có nguy hiểm không?' },
      {
        type: 'p',
        text: 'Nếu bạch cầu ở mức cho phép (khoảng 12.000 – 18.000/mm³ máu), mẹ có thể không cần quá lo lắng. Tuy nhiên, các triệu chứng sốt, chóng mặt, phản ứng dị ứng và viêm cho thấy bạch cầu đang tăng cao.',
      },
      {
        type: 'p',
        text: 'Nếu bạch cầu tăng quá ngưỡng kèm triệu chứng ngày càng nặng, có thể dẫn đến nhiễm độc thai nghén, thậm chí bệnh bạch cầu cấp – rất nguy hiểm cho cả mẹ và thai nhi.',
      },
      { type: 'h2', text: 'Mẹ cần làm gì?' },
      {
        type: 'ul',
        items: [
          'Gặp bác sĩ sản khoa uy tín để chẩn đoán nguyên nhân và được tư vấn phác đồ điều trị an toàn cho mẹ và bé.',
          'Ăn uống đủ dưỡng chất, sinh hoạt hợp lý.',
          'Giữ lối sống tích cực, lạc quan; tập thể dục nhẹ nhàng giúp lưu thông máu.',
        ],
      },
      {
        type: 'quote',
        text: 'Tại Tâm Trí, mẹ bầu được làm đầy đủ các xét nghiệm và siêu âm cần thiết ngay tại phòng khám – quy trình liền mạch, tiết kiệm thời gian và được bác sĩ tư vấn trực tiếp ngay sau khi có kết quả.',
      },
    ],
  },
  {
    slug: 'kham-thai-khong-chi-don-gian-la-sieu-am',
    title: 'Khám thai không chỉ đơn giản là siêu âm',
    date: '2025-11-20',
    category: 'Khám thai',
    icon: 'Stethoscope',
    // Ảnh mẫu tạm thời (Wikimedia Commons) – thay bằng ảnh của phòng khám khi có
    image: {
      src: '/images/kien-thuc/kham-thai.webp',
      author: 'Ricmart 01',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Midwife_check-up.jpg',
    },
    excerpt:
      '“Tim thai vẫn đập, con vẫn máy, siêu âm thấy hình con rõ là yên tâm rồi… phải không?” Thực tế là chưa đủ đâu mẹ nhé.',
    tags: ['Khám thai định kỳ', 'Siêu âm', 'NIPT'],
    content: [
      {
        type: 'p',
        text: 'Nhiều mẹ bầu khi đi khám thai thường nghĩ: “Tim thai vẫn đập, con vẫn máy, siêu âm thấy hình con rõ là yên tâm rồi… phải không?” Thực tế là chưa đủ đâu nhé.',
      },
      { type: 'h2', text: 'Siêu âm quan trọng, nhưng không phải tất cả' },
      {
        type: 'p',
        text: 'Siêu âm giúp quan sát hình thái thai nhi, đo các chỉ số phát triển, kiểm tra nước ối, bánh rau, dây rốn và tầm soát dị tật ở các mốc 12 – 22 – 32 tuần. Tuy nhiên, siêu âm không đánh giá được toàn diện sức khỏe của mẹ và không phát hiện được các tình trạng như tiền sản giật, tăng huyết áp thai kỳ, thiếu máu, tiểu đường thai kỳ, nhiễm trùng tiềm ẩn, rối loạn đông máu hay bất thường chức năng gan – thận.',
      },
      { type: 'h2', text: 'Một buổi khám thai đầy đủ cần' },
      {
        type: 'ul',
        items: [
          { title: 'Đo huyết áp, cân nặng', text: 'phát hiện sớm tiền sản giật.' },
          { title: 'Xét nghiệm nước tiểu', text: 'tầm soát đạm niệu, nhiễm trùng tiểu.' },
          { title: 'Xét nghiệm máu định kỳ', text: 'kiểm tra thiếu máu, tiểu đường thai kỳ, chức năng gan – thận.' },
          { title: 'Nghe tim thai & đánh giá cử động thai', text: 'theo dõi tình trạng của thai.' },
          { title: 'Khám phụ khoa khi cần', text: 'phát hiện viêm nhiễm, bất thường cổ tử cung.' },
          { title: 'Tư vấn', text: 'dinh dưỡng, vận động, tiêm ngừa, bổ sung vitamin.' },
        ],
      },
      { type: 'h2', text: 'Đặc biệt trong quý 1 thai kỳ' },
      {
        type: 'ul',
        items: [
          'Sàng lọc tiền sản giật sớm: đo huyết áp, siêu âm Doppler động mạch tử cung, xét nghiệm sinh hóa.',
          'Xét nghiệm NIPT – tầm soát bất thường nhiễm sắc thể (Trisomy 21, 18, 13…).',
          'Xét nghiệm máu tổng quát: nhóm máu, miễn dịch Rubella, viêm gan, HIV, giang mai…',
        ],
      },
      {
        type: 'p',
        text: 'Những xét nghiệm này không thể thay thế bằng việc “chỉ siêu âm”. Khám thai là hành trình chăm sóc toàn diện – không chỉ để “nhìn thấy con” mà còn để bảo vệ sức khỏe của mẹ và bé một cách trọn vẹn.',
      },
      {
        type: 'quote',
        text: 'Tại Tâm Trí, ở những mốc quan trọng mẹ được siêu âm 2D/4D, làm đầy đủ xét nghiệm và kiểm tra phụ khoa khi cần – tất cả ngay tại phòng khám, dưới sự thăm khám của BS CKII Đỗ Văn Tâm.',
      },
    ],
  },
  {
    slug: 'tao-bon-khi-mang-thai-phong-ngua-va-cach-dieu-tri-hieu-qua',
    title: 'Táo bón khi mang thai – phòng ngừa và cách điều trị hiệu quả',
    date: '2025-11-20',
    category: 'Sức khỏe mẹ bầu',
    icon: 'Salad',
    // Ảnh mẫu tạm thời (Wikimedia Commons) – thay bằng ảnh của phòng khám khi có
    image: {
      src: '/images/kien-thuc/tao-bon.webp',
      author: 'formulatehealth',
      license: 'CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Healthy_Food_-_Colourful_Fruit_and_Veg_-_50191699151.jpg',
    },
    excerpt:
      'Ước tính có đến một nửa số thai phụ gặp táo bón ở một giai đoạn nào đó. Đừng xem nhẹ – đây là cách phòng ngừa và cải thiện an toàn.',
    tags: ['Dinh dưỡng thai kỳ', 'Sức khỏe mẹ bầu'],
    content: [
      {
        type: 'p',
        text: 'Trong thai kỳ, nhiều mẹ bầu gặp tình trạng táo bón nhưng thường xem nhẹ hoặc ngại chia sẻ. Thực tế, đây là vấn đề phổ biến – ước tính có đến một nửa số thai phụ trải qua táo bón ở một giai đoạn nào đó.',
      },
      { type: 'h2', text: 'Ảnh hưởng của táo bón' },
      {
        type: 'p',
        text: 'Táo bón khiến mẹ dễ mệt mỏi, chán ăn, đầy bụng. Rặn nhiều khi đi vệ sinh có thể làm tăng nguy cơ sảy thai hoặc sinh non. Tình trạng kéo dài còn dễ gây trĩ, nứt kẽ hậu môn, ảnh hưởng chất lượng cuộc sống và tâm lý của mẹ.',
      },
      { type: 'h2', text: 'Nguyên nhân' },
      {
        type: 'p',
        text: 'Theo BS CKII Đỗ Văn Tâm, hormone progesterone tăng làm nhu động ruột chậm lại, tử cung lớn dần chèn ép hệ tiêu hóa, cùng tình trạng nôn nghén, mất nước trong 3 tháng đầu là những yếu tố thường gặp. Ngoài ra còn do ăn ít chất xơ, ít vận động, bổ sung sắt và canxi liều cao, thói quen nhịn đi vệ sinh hoặc bệnh lý kèm theo như tiểu đường thai kỳ, suy giáp.',
      },
      { type: 'h2', text: 'Mẹ bầu nên làm gì?' },
      {
        type: 'ul',
        items: [
          'Uống đủ 2,5 – 3 lít nước mỗi ngày.',
          'Ăn nhiều rau xanh, trái cây, ngũ cốc nguyên hạt để bổ sung chất xơ.',
          'Bổ sung probiotic và prebiotic giúp cân bằng hệ vi sinh đường ruột.',
          'Vận động nhẹ nhàng như đi bộ, yoga hoặc bơi lội.',
          'Tập thói quen đi vệ sinh đúng giờ, không nhịn đi tiêu.',
          'Giữ tinh thần thoải mái, giảm căng thẳng, ngủ đủ giấc.',
          'Trao đổi với bác sĩ để điều chỉnh loại sắt hoặc canxi dễ hấp thu hơn.',
        ],
      },
      {
        type: 'quote',
        text: 'Khi táo bón nặng hoặc kéo dài, mẹ không nên tự ý dùng thuốc nhuận tràng mà cần thăm khám để được bác sĩ chỉ định phương pháp điều trị an toàn.',
      },
    ],
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
