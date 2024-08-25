const MembershipPolicyPage = () => {
  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto w-full text-primary px-3 flex flex-col gap-5 font-medium py-10 ">
        <p className="text-3xl font-semibold">
          Chính sách thành viên Điều kiện chính sách thành viên
        </p>
        1. Thẻ thành viên Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng
        trên hệ thống nhà hàng Dola Restaurant sẽ được cấp thẻ thành viên.
        <p>2. Thẻ VIP</p>
        <p>Điều kiện nhận thẻ VIP:</p>
        <p>+ Có giá trị tổng đơn hàng lớn hơn 15 triệu/ tháng</p>
        <p>+ Mua hàng với giá trị 3 triệu trợ lên</p>
        <p>+ Tham gia các hoạt động, chương trình khuyến mãi của Tonatra</p>
        <p>
          Lưu ý: Hạn mức 10, 20, 30, 50,100 triệu đồng là tính từ thời điểm bắt
          đầu mua tới khi lên thẻ. Khi lên thẻ VIP và tích tiếp lên 20 đến 100
          triệu, tổng tiền này là tính từ khi khách hàng mua lần đầu và cộng dồn
          lên.
        </p>
      </div>
    </div>
  );
};

export default MembershipPolicyPage;
