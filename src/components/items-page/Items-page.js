import React, { useEffect, useState } from "react";
import "./item-page.scss";
import {
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import axios from "axios";
import { api, byId } from "../api/api";
import { toast } from "react-toastify";

function Itemspage() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [found, setFound] = useState([]);
  const [lost, setLost] = useState([]);
  const [subCategory, setSubCategory] = useState([]);


  const openAddModal = () => setAddModal(!addModal);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    getAll();
    getFound();
    getCategory();
    getSubCategory();
    getLost();
  }, []);

  const getAll = () => {
    axios
      .get(api + "item/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch(() => console.log("items kelmadi!!!"));
  };

  const getFound = () => {
    axios
      .get(api + "item/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        setFound(res.data.filter((t) => t.type == "FOUND"))
        console.log(res.data.filter((t) => t.type == "Lost"));

      })
      .catch(() => console.log("Found kelmadi!!!"));
  };

  const getLost = () => {
    axios
      .get(api + "item/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        setLost(res.data.filter((t) => t.type == "Lost"))
        console.log(res.data.filter((t) => t.type == "Lost"));
      })
      .catch(() => console.log("lost kelmadi!!!"));
  };

  const getCategory = () => {
    axios
      .get(api + "category/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setCategory(res.data)
        console.log(res.data);
      })
      .catch(() => console.log("category kelmadi!!!"));
  };

  const getSubCategory = () => {
    axios
      .get(api + "sub_category/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setSubCategory(res.data)
        console.log(res.data);
      })
      .catch(() => console.log("Subcategory kelmadi!!!"));
  };



  const addItem = () => {
    const addData = new FormData();
    addData.append("type", byId("type").value);
    addData.append("name", byId("name").value);
    addData.append("date", byId("date").value);
    addData.append("image", byId("file").files[0]);
    addData.append("brand", byId("brand").value);
    addData.append("primary_color", byId("color").value);
    addData.append("secondary_color", byId("secondary").value);
    addData.append("specific_description", byId("description").value);
    addData.append("specific_location", byId("location").value);
    addData.append("country", byId("region").value);
    addData.append("city", byId("city").value);
    addData.append("street", byId("street").value);
    addData.append("contact_info", byId("contact_info").value);
    addData.append("latitude", 0);
    addData.append("longitude", 0);
    addData.append("category ", byId("category").value);
    addData.append("sub_category  ", byId("subcategory").id);
    // addData.append("id", foundId.id);

    axios
    .post(api + "item/", addData, {
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
      },
    })
    .then(() => {
      openAddModal();
      getAll();
      toast.success("Item muvaffaqiyatli qo'shildi✔");
    })
    .catch(() => toast.error("Item qo'shishda xatolik yuz berdi!!!"));
  };

  const searchFound = () => {
    let searchItem = byId("search").value;
    if (!!searchItem)
      axios
        .get(api + "item/?search=" + searchItem)
        .then((res) => setItem(res.data.filter((t) => t.type == "FOUND")));
    else getAll();
  };

  const categoryFIlter = () => {
    let categoryId = byId("categoryFilter").value;
    axios
      .get(api + "item/category/" + categoryId + "/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => setItem(res.data.filter((c) => c.type == "FOUND")))
      .catch(() => console.log("category filter ishlamadi!!!"));
  };

  const goFoundInfo = () => byId("goFoundInfo").click();

  return (
    <div className="items-main">
      <Container>
        <div className="items-body">
          <h1>
            <b>
              <span>Lost </span>
              <span>and </span>
              <span>Found</span>
            </b>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </p>
        </div>
        <div className="items-tables">
          <div className="items-top row">
            <div className="col-3">
              <button className="btn btn-primary" onClick={openAddModal}>
                +Add
              </button>
            </div>
            <div className="col-9">
              <button
                className="btn btn-warning"
                onClick={() => {
                  getAll();
                  byId("categoryFilter").value = "Category filter";
                }}
              >
                All items
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  getFound();
                  byId("categoryFilter").value = "Category filter";
                }}
              >
                Found items
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  getLost();
                  byId("categoryFilter").value = "Category filter";
                }}
              >
                Lost items
              </button>
            </div>
          </div>
          <div className="items-bottom">
            <table class="table table-striped table-hover item-table">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Address</th>
                  <th scope="col">Info</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td scope="row">1</td>
                  <td className="table-row">
                    <img
                      src="https://cdn-imgix-open.headout.com/MB/UGC/CbMoQb1AKj2.jpg?auto=format&q=90&crop=faces"
                      className="table-img"
                      alt="..."
                    />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <button className="btn btn-outline-primary w-50">
                      Info
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      {/* add modal */}
      <Modal isOpen={addModal} centered fullscreen scrollable>
        <ModalHeader
          toggle={openAddModal}
          className="text-light fs-4 fw-bolder"
        >
          Add Item
        </ModalHeader>
        <ModalBody className="modal-body p-4 ">
          <div className="items-add">
            <div className="booot2">
              <Input type="file" className="form-control " id="file" />
            </div>
            <div>
              <select class="form-control" id="type">
                <option selected disabled>
                  TYPE
                </option>
                <option value="LOST">LOST</option>
                <option value="FOUND">FOUND</option>
              </select>
            </div>
            <FormGroup floating>
              <Input
                id="name"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="name">Name</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="brand"
                name="Brand"
                placeholder="Brand"
                type="name"
              />
              <Label for="brand">Brand</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="date"
                name="Date"
                placeholder="Date"
                type="Date"
              />
              <Label for="date">Date</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="color"
                name="Color"
                placeholder="Color"
                type="text"
              />
              <Label for="color">Color</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="secondary"
                name="Secondarycolor"
                placeholder="Secondary color"
                type="text"
                className="
                "
              />
              <Label for="secondary" className="me-4">
                Secondary color
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="region"
                name="Region"
                placeholder="Region"
                type="text"
              />
              <Label for="region">Region</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="city"
                name="City"
                placeholder="City"
                type="text"
              />
              <Label for="city">City</Label>
            </FormGroup>

            <FormGroup floating>
              <Input
                id="street"
                name="street"
                placeholder="Street"
                type="text"
              />
              <Label for="street">Street</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="description"
                name="des"
                placeholder="Specific description "
                type="text"
              />
              <Label for="description">Specific description </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="location"
                name="des2"
                placeholder="Specific location"
                type="text"
              />
              <Label for="location">Specific location</Label>
            </FormGroup>

            <div>
              <select class="form-control" id="category">
                <option selected disabled>
                  Category
                </option>
                {category &&
                  category.map((item, i) => (
                    <option key={i} id={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <select class="form-control " id="subcategory">
                <option selected disabled>
                  SubCategory
                </option>
                {subCategory &&
                  subCategory.map((item, i) => (
                    <option key={i} id={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <textarea
              id="contact"
              className="form-control booot3"
              placeholder="Contact info"
            />

            {/* <textarea
              id="description"
              className="form-control booot"
              placeholder="Description"
            /> */}
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openAddModal}
          >
            Close
          </Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={addItem}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Itemspage;
