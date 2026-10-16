'use strict';

const tools = [
  { name: 'Canva', group: 'Thiết kế học liệu', purpose: 'Thiết kế bài giảng, infographic và phiếu học tập.', pros: 'Nhiều mẫu đẹp, thao tác trực quan.', cons: 'Một số tài nguyên và tính năng cần trả phí.', cost: 'Miễn phí cơ bản; có gói trả phí.', ease: 5 },
  { name: 'PowerPoint', group: 'Thiết kế học liệu', purpose: 'Tạo bài trình chiếu và nội dung trực quan.', pros: 'Phổ biến, nhiều công cụ trình bày.', cons: 'Cần thời gian để thiết kế tốt.', cost: 'Tùy phiên bản và giấy phép.', ease: 4 },
  { name: 'Google Forms', group: 'Kiểm tra, đánh giá', purpose: 'Tạo khảo sát, bài kiểm tra và thu thập phản hồi.', pros: 'Dễ chia sẻ, tự tổng hợp câu trả lời.', cons: 'Ít yếu tố trò chơi hóa.', cost: 'Có thể sử dụng miễn phí.', ease: 5 },
  { name: 'Azota', group: 'Kiểm tra, đánh giá', purpose: 'Giao bài, tổ chức kiểm tra và theo dõi kết quả.', pros: 'Phù hợp quy trình giao và thu bài.', cons: 'Cần làm quen với hệ thống.', cost: 'Tùy gói hiện hành.', ease: 4 },
  { name: 'Mentimeter', group: 'Tương tác lớp học', purpose: 'Khảo sát, bình chọn và thu thập ý kiến trực tiếp.', pros: 'Phản hồi trực quan, tăng tương tác.', cons: 'Gói miễn phí có giới hạn.', cost: 'Có gói miễn phí và trả phí.', ease: 4 },
  { name: 'Padlet', group: 'Tương tác lớp học', purpose: 'Tạo bảng chia sẻ ý tưởng và sản phẩm nhóm.', pros: 'Dễ tổng hợp ý kiến và tài liệu.', cons: 'Giới hạn theo gói sử dụng.', cost: 'Tùy gói sử dụng.', ease: 4 },
  { name: 'Google Classroom', group: 'Quản lý lớp học', purpose: 'Quản lý lớp, giao bài và chia sẻ tài liệu.', pros: 'Tập trung tài liệu và bài tập.', cons: 'Cần tài khoản phù hợp.', cost: 'Tùy loại tài khoản.', ease: 4 },
  { name: 'Microsoft Teams', group: 'Quản lý lớp học', purpose: 'Họp trực tuyến, cộng tác và chia sẻ tệp.', pros: 'Tích hợp họp và làm việc nhóm.', cons: 'Có nhiều chức năng cần tìm hiểu.', cost: 'Tùy gói dịch vụ.', ease: 3 },
  { name: 'ChatGPT', group: 'AI hỗ trợ dạy học', purpose: 'Gợi ý ý tưởng, câu hỏi và nội dung bài học.', pros: 'Hỗ trợ nhiều nhiệm vụ nhanh.', cons: 'Cần kiểm chứng thông tin đầu ra.', cost: 'Có gói miễn phí và trả phí.', ease: 4 },
  { name: 'Google Gemini', group: 'AI hỗ trợ dạy học', purpose: 'Hỗ trợ giải thích kiến thức và phát triển ý tưởng.', pros: 'Có thể hỗ trợ nhiều dạng nhiệm vụ.', cons: 'Câu trả lời cần được kiểm tra.', cost: 'Có gói miễn phí và trả phí.', ease: 4 },
  { name: 'Quizizz', group: 'Kiểm tra, đánh giá', purpose: 'Tạo câu hỏi tương tác và hoạt động ôn tập.', pros: 'Tạo không khí học tập sôi nổi.', cons: 'Một số chức năng thay đổi theo gói.', cost: 'Có lựa chọn miễn phí và trả phí.', ease: 4 },
  { name: 'Kahoot!', group: 'Kiểm tra, đánh giá', purpose: 'Tổ chức câu hỏi dạng trò chơi trực tiếp.', pros: 'Tăng hứng thú và phản hồi nhanh.', cons: 'Cần thiết bị và kết nối ổn định.', cost: 'Có gói miễn phí và trả phí.', ease: 4 },
  { name: 'YouTube', group: 'Học liệu đa phương tiện', purpose: 'Tìm và chia sẻ video minh họa bài học.', pros: 'Nguồn video phong phú.', cons: 'Cần chọn lọc nội dung phù hợp.', cost: 'Xem video cơ bản miễn phí.', ease: 5 }
];

const criteria = [
  { name: 'Dễ sử dụng', detail: 'Mức độ dễ học và thao tác.', weight: 25 },
  { name: 'Tính năng', detail: 'Mức độ đáp ứng mục tiêu dạy học.', weight: 30 },
  { name: 'Tương tác', detail: 'Khả năng thu hút người học.', weight: 20 },
  { name: 'Chi phí', detail: 'Mức độ phù hợp ngân sách.', weight: 15 },
  { name: 'Tiếp cận', detail: 'Khả năng dùng trên nhiều thiết bị.', weight: 10 }
];
const sampleScores = tools.slice(0, 6).map((tool, index) => [tool.ease, [4, 4, 4, 4, 3, 4][index], [4, 3, 2, 3, 5, 4][index], [4, 3, 5, 4, 3, 3][index], 4]);
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function renderComparison() {
  const options = $('#tool-options');
  const tableBody = $('#comparison-table tbody');
  if (!options || !tableBody) return;
  options.innerHTML = tools.map((tool, index) => `<label class="form-check"><input class="form-check-input compare-check" type="checkbox" value="${index}" id="tool-${index}"><span>${tool.name}</span></label>`).join('');
  const update = () => {
    const selected = $$('.compare-check:checked').map(input => tools[Number(input.value)]);
    $('#selected-count').textContent = `Đã chọn: ${selected.length}`;
    const message = $('#selection-message');
    if (selected.length < 2) {
      message.textContent = 'Hãy chọn ít nhất 2 công cụ để bắt đầu so sánh.';
      tableBody.innerHTML = '<tr><td colspan="2" class="empty-state">Chọn ít nhất 2 công cụ ở phía trên để hiển thị bảng.</td></tr>';
      return;
    }
    message.textContent = `Đang so sánh ${selected.length} công cụ. Bạn có thể thay đổi lựa chọn bất cứ lúc nào.`;
    const rows = [
      ['Nhóm chức năng', tool => tool.group], ['Mục đích', tool => tool.purpose],
      ['Ưu điểm', tool => tool.pros], ['Hạn chế', tool => tool.cons],
      ['Chi phí tham khảo', tool => tool.cost], ['Độ dễ sử dụng', tool => `${tool.ease}/5`]
    ];
    tableBody.innerHTML = rows.map(([label, value]) => `<tr><th scope="row">${label}</th>${selected.map(tool => `<td>${value(tool)}</td>`).join('')}</tr>`).join('');
    $('#comparison-table thead').innerHTML = `<tr><th scope="col">Tiêu chí</th>${selected.map(tool => `<th scope="col">${tool.name}</th>`).join('')}</tr>`;
  };
  options.addEventListener('change', update);
  $('#clear-selection')?.addEventListener('click', () => { $$('.compare-check').forEach(input => { input.checked = false; }); update(); });
  update();
}

function renderRatings() {
  const weightBody = $('#weight-body');
  const scoreBody = $('#score-body');
  const scoreHead = $('#score-head');
  const results = $('#results');
  if (!weightBody || !scoreBody || !scoreHead || !results) return;
  let scores = sampleScores.map(row => [...row]);
  weightBody.innerHTML = criteria.map((criterion, index) => `<tr><th scope="row">${criterion.name}</th><td>${criterion.detail}</td><td><input class="form-control weight-input" type="number" min="0" max="100" step="1" value="${criterion.weight}" data-index="${index}" aria-label="Trọng số ${criterion.name}"></td></tr>`).join('');
  scoreHead.innerHTML = `<tr><th scope="col">Công cụ</th>${criteria.map(item => `<th scope="col">${item.name}</th>`).join('')}</tr>`;
  function drawScores() {
    scoreBody.innerHTML = tools.slice(0, 6).map((tool, rowIndex) => `<tr><th scope="row">${tool.name}</th>${criteria.map((criterion, colIndex) => `<td><select class="form-select score-input" data-row="${rowIndex}" data-col="${colIndex}" aria-label="Điểm ${criterion.name} của ${tool.name}">${[1,2,3,4,5].map(n => `<option value="${n}" ${scores[rowIndex][colIndex] === n ? 'selected' : ''}>${n}</option>`).join('')}</select></td>`).join('')}</tr>`).join('');
  }
  function calculate() {
    const weights = $$('.weight-input').map(input => Math.max(0, Number(input.value) || 0));
    const totalWeight = weights.reduce((sum, value) => sum + value, 0);
    $('#weight-total').textContent = `Tổng trọng số: ${totalWeight}%`;
    $('#weight-total').classList.toggle('text-danger', totalWeight !== 100);
    const ranking = tools.slice(0, 6).map((tool, index) => {
      const score = totalWeight ? scores[index].reduce((sum, value, col) => sum + value * weights[col], 0) / totalWeight : 0;
      return { name: tool.name, score };
    }).sort((a, b) => b.score - a.score);
    results.innerHTML = ranking.map((item, index) => `<div class="result-card"><span class="count-badge">Hạng ${index + 1}</span><h3 class="mt-2">${item.name}</h3><p class="mb-1"><strong>${item.score.toFixed(2)}/5,00</strong></p><div class="progress" role="progressbar" aria-label="Điểm ${item.name}" aria-valuenow="${item.score * 20}" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width:${item.score * 20}%"></div></div></div>`).join('');
  }
  drawScores(); calculate();
  scoreBody.addEventListener('change', event => { const target = event.target.closest('.score-input'); if (!target) return; scores[Number(target.dataset.row)][Number(target.dataset.col)] = Number(target.value); calculate(); });
  weightBody.addEventListener('input', calculate);
  $('#reset-scores')?.addEventListener('click', () => { scores = sampleScores.map(row => [...row]); drawScores(); calculate(); });
}

function setupContactForm() {
  const form = $('#contact-form');
  if (!form) return;
  const status = $('#form-status');
  const nameInput = $('#full-name');
  const emailInput = $('#email');
  const messageInput = $('#message');

  function showFormStatus(message, isSuccess) {
    status.classList.remove('status-error', 'status-success');
    status.classList.add(isSuccess ? 'status-success' : 'status-error');
    status.textContent = message;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    status.classList.remove('status-error', 'status-success');
    status.textContent = '';

    const nameRegex = /^[A-ZÀ-ỸĐ][a-zà-ỹđ]*(?: [A-ZÀ-ỸĐ][a-zà-ỹđ]*)+$/;
    if (!nameRegex.test(name)) {
      showFormStatus('Họ tên phải viết hoa chữ cái đầu mỗi từ. Ví dụ: Nguyễn Thị A.', false);
      nameInput.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus('Email chưa đúng định dạng. Ví dụ: ten@gmail.com', false);
      emailInput.focus();
      return;
    }

    if (message.length < 5) {
      showFormStatus('Nội dung liên hệ cần có ít nhất 5 ký tự.', false);
      messageInput.focus();
      return;
    }

    showFormStatus('Cảm ơn ' + name + '! Thông tin đã được kiểm tra thành công trên website demo.', true);
    form.reset();
  });
}

function setupFaq() {
  $$('.faq-question').forEach((question, index) => {
    const answer = question.nextElementSibling;
    if (!answer) return;
    question.classList.add('accordion-button');
    question.classList.toggle('collapsed', index !== 0);
    question.setAttribute('role', 'button');
    question.setAttribute('tabindex', '0');
    question.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    answer.classList.add('accordion-collapse', 'collapse');
    if (index === 0) answer.classList.add('show');
    const toggle = () => { const open = answer.classList.toggle('show'); question.classList.toggle('collapsed', !open); question.setAttribute('aria-expanded', String(open)); };
    question.addEventListener('click', toggle);
    question.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); } });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  $$('.site-nav .nav-link').forEach(link => { if (link.getAttribute('href') === currentPage) { link.classList.add('active'); link.setAttribute('aria-current', 'page'); } });
  renderComparison();
  renderRatings();
  setupContactForm();
  setupFaq();
});
