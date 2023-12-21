import React, { useEffect, useState } from "react";
import "./item-page.scss";
import {
  Button,
  Container,
  Input,
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
  const [found, setFound] = useState([]);
  const [category, setCategory] = useState([]);
  const [foundId, setFoundId] = useState([]);

  const openAddModal = () => setAddModal(!addModal);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    getAll()
    getFound();
    getCategory();
    getLost();
  }, []);

  const getFound = () => {
    axios
      .get(api + "item/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then((res) => setFound(res.data.filter((t) => t.type == "FOUND")))
      .catch(() => console.log("Found kelmadi!!!"));
  };

  const getLost = () => {
    axios
      .get(api + "item/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then((res) => setFound(res.data.filter((t) => t.type == "Lost")))
      .catch(() => console.log("Found kelmadi!!!"));
  };

  const getCategory = () => {
    axios
      .get(api + "category/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => setCategory(res.data))
      .catch(() => console.log("category kelmadi!!!"));
  };

  const addItem = () => {
    const editData = new FormData();
    editData.append("image", byId("file").files[0]);
    editData.append("name", byId("name").value);
    editData.append("description", byId("description").value);
    editData.append("contact_info", byId("contact_info").value);
    editData.append("type", "FOUND");
    editData.append("latitude", 0);
    editData.append("longitude", 0);
    editData.append("category ", byId("category").value);
    editData.append("id", foundId.id);

    axios.put(api + "item" + foundId.id + "/", editData, {
      headers: {
        Authorization: sessionStorage.getItem('jwtToken'),
      },
    })
      .then(() => {
        openAddModal();
        getFound();
        toast.success("Found item muvaffaqiyatli taxrirlandi✔")
      })
      .catch(() => {
        toast.error("Found item taxrirlashda xatolik yuz berdi!!!")
      })
  }

  const searchFound = () => {
    let searchItem = byId("search").value;
    if (!!searchItem)
      axios
        .get(api + "item/?search=" + searchItem)
        .then((res) => setFound(res.data.filter((t) => t.type == "FOUND")));
    else getFound();
  };

  const categoryFIlter = () => {
    let categoryId = byId("categoryFilter").value;
    axios
      .get(api + "item/category/" + categoryId + "/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => setFound(res.data.filter((c) => c.type == "FOUND")))
      .catch(() => console.log("category filter ishlamadi!!!"));
  };

  const getAll = () => {
    axios
      .get(api + "items/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => setFound(res.data.filter((i) => i.type == "FOUND")))
      .catch(() => console.log("my items kelamdi!!!"));
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

      <Modal isOpen={addModal} centered size="lg">
        <ModalHeader toggle={openAddModal} className="text-dark fs-4 fw-bolder">
          Add Found
        </ModalHeader>
        <ModalBody className="techer__modal-body">
          <Input type="file" className="form-control mb-3" id="file" />
          <Input id="name" className="mb-3" placeholder="Name" />
          <Input
            id="contact_info"
            className="mb-3"
            placeholder="Contact info"
          />
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
          />
          <select id="category" className="form-control mt-3">
            <option selected disabled>
              Category
            </option>
            {/* {category &&
              category.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))} */}
          </select>
        </ModalBody>
        <ModalFooter>
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
