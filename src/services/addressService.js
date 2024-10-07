import axios from "axios";

const config_header = {
  headers: {
    "Content-Type": "application/json",
    Token: "52f28aa4-83fc-11ef-ad7b-6a056ff91e4d",
    ShopId: 5370731,
  },
};

export const getAllProvinces = async () => {
  const response = await axios.get(
    "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
    config_header,
  );
  return response;
};

export const getDistrictsByProvince = async (provinceId) => {
  const response = await axios.get(
    `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceId}`,
    config_header,
  );
  return response;
};

export const getWardsByDistrict = async (districtId) => {
  const response = await axios.get(
    `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`,
    config_header,
  );
  return response;
};

// data = {
//     service_type_id: 2,
//     to_district_id: 1574,
//     to_ward_code: "550306",
//     weight: 2000,
//   },
export const getShippingFee = async (data) => {
  const response = await axios.post(
    "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee",
    data,
    config_header,
  );
  return response;
};
