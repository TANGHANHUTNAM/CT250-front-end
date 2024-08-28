const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Introduce */}
      <div className="form-introduce w-full lg:w-1/2 px-4 text-primary">
        <div className="title p-3 bg-tertiary rounded-t-xl mb-2">
          <p className="uppercase font-bold">Nhà hàng Tonatra Restaurant</p>
        </div>
        <div className="content flex flex-col justify-between gap-4 p-3 border-solid border border-tertiary rounded-lg">
          <span className="description text-bs font-normal lg:h-[100px] leading-snug">
            Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm
            phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất.
            Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho
            thực khách. Tonatra Restaurant xin chân thành cảm ơn.
          </span>
          <ul className="flex flex-col gap-2 mt-2 font-medium text-sm space-y-1">
            <li className="title text-base font-semibold">Cửa hàng chính</li>
            <li>
              <b>Địa chỉ:</b> Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT
            </li>
            <li>
              <b>Điện thoại: </b>
              <a className="text-tertiary" href="tel:0292 3831 530">
                0292 3831 530
              </a>
            </li>
            <li>
              <b>Email: </b>
              <a className="text-tertiary" href="mailto:dhct@ctu.edu.vn">
                dhct@ctu.edu.vn
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Contact */}
      <div className="form-contact w-full lg:w-1/2 px-4 flex-1 mt-3 lg:mt-0">
        <div className="title p-3 bg-tertiary rounded-t-xl mb-2">
          <p className="uppercase font-bold text-primary">
            Liên hệ với chúng tôi
          </p>
        </div>
        <div className="content p-3 border-solid border border-tertiary rounded-lg">
          <form>
            <div className="flex flex-col gap-2 text-sm font-medium">
              <input
                type="text"
                placeholder="Họ và tên"
                className="border border-tertiary rounded-md px-4 py-1 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-tertiary rounded-md px-4 py-1 outline-none"
              />
              <input
                type="text"
                placeholder="Điện thoại"
                className="border border-tertiary rounded-md px-4 py-1 outline-none"
              />
              <textarea
                placeholder="Nội dung"
                rows="4"
                className="border border-tertiary rounded-md px-4 py-1 outline-none"
              ></textarea>
              <button className="bg-tertiary text-white py-2 px-5 rounded-md w-fit hover:bg-yellow-600">
                <span className="">Gửi thông tin</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
