import React, { useEffect, useState } from "react";
import {
  getCategoryRoom,
  getInforPro,
  getProByCategory,
  getSupplier,
} from "../../service/APIService";

const Body = () => {
  const [dataSupplier, setDataSupplier] = useState([]);
  const [dataCategoryRoom, setDataCategoryRoom] = useState([]);
  const [dataPro, setDataPro] = useState([]);
  const [dataInformationPro, setdataInformationPro] = useState([]);
  const [subId, setSubId] = useState(1);
  const [roomCategoryId, setroomCategoryId] = useState(1);
  const [proId, setProId] = useState(1);
  useEffect(() => {
    getDataSupplier();
    getDataCategoryRoom();
    getProductByCategory();
    getInforProduct();
  }, [roomCategoryId, proId]);
  const getDataSupplier = async () => {
    let data = await getSupplier();
    setDataSupplier(data.data.data);
  };
  const getDataCategoryRoom = async () => {
    let data = await getCategoryRoom();
    setDataCategoryRoom(data.data.data);
  };
  const getProductByCategory = async () => {
    let data = await getProByCategory(roomCategoryId);
    setDataPro(data.data.data);
  };
  const getInforProduct = async () => {
    let data = await getInforPro(proId, subId);
    setdataInformationPro(data.data.data);
  };
  console.log("this is ?", dataInformationPro);

  console.log("subId", subId);
  console.log("roomCategoryId", roomCategoryId);
  console.log("proId", proId);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="card-bao-gia">
              <div className="card-body">
                <div className="card no-shadow">
                  <div className="show-content">
                    <div className="content-non-inline">
                      Yêu cầu của khách hàng:
                    </div>
                  </div>
                  <form
                    style={{ padding: "10px 0 0 0", alignItems: "center" }}
                    className="display-flex"
                    action=""
                  >
                    <div>Chọn nhà cung cấp</div>
                    <tfoot>
                      <tr>
                        <td colspan="9">
                          <select
                            onChange={(e) => {
                              setSubId(e.target.value);
                            }}
                            className="btn btn-primary m-1"
                          >
                            <title>Chọn nhà cung cấp</title>
                            {dataSupplier.map((items) => (
                              <option value={items.supId}>
                                {items.supName}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tfoot>
                  </form>
                  <form action="">
                    <form
                      style={{ padding: "10px 0 0 0", alignItems: "center" }}
                      className="display-flex"
                      action=""
                    >
                      <tfoot>
                        <tr>
                          <td colspan="9">
                            <select
                              onChange={(e) => {
                                setroomCategoryId(e.target.value);
                              }}
                              className="btn btn-primary m-1"
                            >
                              <title>chon loai phong</title>
                              {dataCategoryRoom.map((items) => (
                                <option value={items.roomCategoryId}>
                                  {items.categoryName}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      </tfoot>
                      <button className="xoa-phong" type="button">
                        Xóa phòng
                      </button>
                    </form>

                    <table
                      className="content-table show-product"
                      id="manage-product-table-1"
                    >
                      <thead>
                        <tr>
                          <th
                            className="display-column content-center"
                            rowspan="2"
                          >
                            Sản phẩm
                          </th>
                          <th
                            className="display-column content-center"
                            rowspan="2"
                          >
                            Mô tả
                          </th>
                          <th
                            className="display-column content-center"
                            colspan="3"
                          >
                            Kích thước
                          </th>
                          <th
                            className="display-column content-center"
                            rowspan="2"
                          >
                            Đơn vị
                          </th>
                          <th
                            className="display-column content-center"
                            rowspan="2"
                          >
                            Số lượng
                          </th>
                          <th
                            className="display-column content-center"
                            rowspan="2"
                          >
                            Đơn giá
                          </th>
                          <th className="content-center" rowspan="2">
                            Hình tham khảo
                          </th>
                          <th className="content-center" rowspan="2"></th>
                        </tr>
                        <tr>
                          <th className="content-center">Dài</th>
                          <th className="content-center">Rộng</th>
                          <th className="content-center">Cao</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {items.map((product, index) => ( */}
                        <tr className="display-input-none-border">
                          <td>
                            <input type="hidden" name="" />

                            <select
                              onChange={(e) => {
                                setProId(e.target.value);
                              }}
                              className="btn btn-product m-1"
                            >
                              <title>Chọn sản phẩm</title>
                              <option>Chon san pham</option>
                              {dataPro.map((items) => (
                                <option value={items.pro_id}>
                                  {items.pro_name}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="content-center">
                            <input type="text" name="" />
                          </td>
                          <td className="content-center">
                            <input type="hidden" name="" />
                          </td>
                          <td className="content-center">
                            <input type="hidden" name="" />
                          </td>
                          <td className="content-center">
                            <input type="hidden" name="" />
                          </td>
                          <td className="content-center">
                            <input type="hidden" name="" />
                          </td>
                          <td className="input-value">
                            <input type="hidden" name="" />
                            <input type="number " />
                          </td>
                          <td className="content-center">
                            <input type="hidden" name="" />
                          </td>
                          <td className="content-center">
                            <input type="hidden" name="" />
                          </td>
                          <td className="content-center">
                            <button
                              className="delete-icon"
                              // onClick={() => deleteRow(index)}
                            >
                              <i style={{ fontSize: "12px" }} className="fa">
                                &#xf00d;
                              </i>
                            </button>
                          </td>
                        </tr>
                        {/* ))} */}
                        <tr className="them-san-pham-trong-phong">
                          <td colspan="10">
                            <button type="button">+</button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="8">Tổng giá phòng: </td>
                          <td colspan="2">1500.000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </form>
                  <button className="them-phong" type="button">
                    Thêm phòng
                  </button>
                  <div className="tong-gia-thi-cong-du-tru">
                    Tổng giá thi công dự trù:
                  </div>
                  <br />
                  <div className="display-flex justify-content-right display-button">
                    <a className="btn btn-primary m-1" href="#">
                      Gởi yêu cầu tư vấn
                    </a>
                    <a className="btn btn-primary m-1" href="#">
                      Quay lại
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
