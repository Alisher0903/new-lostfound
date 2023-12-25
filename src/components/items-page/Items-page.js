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
  Table,
} from "reactstrap";
import axios from "axios";
import { api, byId } from "../api/api";
import { toast } from "react-toastify";

function Itemspage() {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [infoID, setInfoId] = useState([]);
  const [error, setError] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const openAddModal = () => setAddModal(!addModal);
  const openEditModal = () => setEditModal(!editModal);
  const openDeleteModal = () => setDeleteModal(!deleteModal);
  const openInfoModal = () => setInfoModal(!infoModal);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    getAll();
    getCategory();
    getSubCategory();
    // getAbout()
  }, []);

  const getAll = () => {
    axios
      .get(api + "itemss/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err));
  };

  const getFound = () => {
    axios
      .get(api + "item/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then((res) => {
        setItem(res.data.filter((t) => t.type == "FOUND"));
        // console.log(res.data.filter((t) => t.type == "Lost"));
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
        setItem(res.data.filter((t) => t.type == "LOST"));
        // console.log(res.data.filter((t) => t.type == "Lost"));
      })
      .catch(() => console.log("lost kelmadi!!!"));
  };

  const getCategory = () => {
    axios
      .get(api + "category/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setCategory(res.data);
      })
      .catch(() => console.log("category kelmadi!!!"));
  };

  const getSubCategory = () => {
    axios
      .get(api + "sub_category/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setSubCategory(res.data);
      })
      .catch(() => console.log("Subcategory kelmadi!!!"));
  };

  const deleteItem = () => {
    axios
      .delete(api + "item" + infoID.id + "/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then(() => {
        toast.success("Item o'chirildi!!!");
        openDeleteModal();
        getAll();
      })
      .catch(() => toast.error("Item o'chirishda xatolik yuz berdi!!!"));
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
    addData.append("contact_info", byId("contact").value);
    addData.append("latitude", 0);
    addData.append("longitude", 0);
    addData.append("category ", byId("category").value);
    addData.append("sub_category  ", byId("subcategory").value);
    // addData.append("id", infoID.id);

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

  const editItem = () => {
    const editData = new FormData();
    editData.append("type", byId("type").value);
    editData.append("name", byId("name").value);
    editData.append("date", byId("date").value);
    editData.append("image", byId("file").files[0]);
    editData.append("brand", byId("brand").value);
    editData.append("primary_color", byId("color").value);
    editData.append("secondary_color", byId("secondary").value);
    editData.append("specific_description", byId("description").value);
    editData.append("specific_location", byId("location").value);
    editData.append("country", byId("region").value);
    editData.append("city", byId("city").value);
    editData.append("street", byId("street").value);
    editData.append("contact_info", byId("contact").value);
    editData.append("latitude", 0);
    editData.append("longitude", 0);
    editData.append("category ", byId("category").value);
    editData.append("sub_category  ", byId("subcategory").value);
    editData.append("id", infoID.id);

    axios
      .put(api + "item" + infoID.id + "/", editData, {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then(() => {
        openEditModal();
        getFound();
        toast.success("Found item muvaffaqiyatli taxrirlandi✔");
      })
      .catch(() => {
        toast.error("Found item taxrirlashda xatolik yuz berdi!!!");
      });
  };

  // const searchFound = () => {
  //   let searchItem = byId("search").value;
  //   if (!!searchItem)
  //     axios
  //       .get(api + "item/?search=" + searchItem)
  //       .then((res) => setItem(res.data.filter((t) => t.type == "FOUND")));
  //   else getAll();
  // };

  //   const getAbout = () => {
  //     let infoId = sessionStorage.getItem("infoId");
  //     axios.get(api + "item/", {
  //         headers: { Authorization: sessionStorage.getItem('jwtToken') }
  //     })
  //         .then(res => {
  //             setInfoId(res.data.find(i => i.id == infoId))
  //         })
  //         .catch(() => {

  //         })
  // }

  const categoryFIlter = () => {
    let categoryId = byId("categoryFilter").value;
    axios
      .get(api + "item/category/" + categoryId + "/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => setItem(res.data.filter((c) => c.type == "FOUND")))
      .catch(() => console.log("category filter ishlamadi!!!"));
  };

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
            <div className="col-12 col-lg-4 category_filter-btnn">
              <button
                className="btn btn-primary text-center"
                style={{ padding: "0.7rem 2rem" }}
                onClick={openAddModal}
              >
                Add+
              </button>
            </div>
            <div className="col-12 col-lg-8 category_filter-btn">
              <button
                onClick={() => {
                  getAll();
                  // byId("categoryFilter").value = "Category filter";
                }}
              >
                All items
              </button>
              <button
                onClick={() => {
                  getLost();
                  // byId("categoryFilter").value = "Category filter";
                }}
              >
                Lost items
              </button>
              <button
                onClick={() => {
                  getFound();
                  // byId("categoryFilter").value = "Category filter";
                }}
              >
                Found items
              </button>
            </div>
          </div>
          <div className="items-bottom mb-5">
            <Table responsiveTag striped hover>
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Type</th>
                  <th scope="col">Info</th>
                  <th scope="col" colSpan="2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  // error ? (
                  //   <h4 className="text-center text-light">You have not item</h4>
                  // ) : (
                  item.length &&
                    item.map((item, i) => (
                      <tr className="text-center" key={i}>
                        <td scope="row">{i + 1}</td>
                        <td className="table-row">
                          <img
                            src={item.image}
                            className="table-img"
                            alt="..."
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.contact_info}</td>
                        <td>{item.type}</td>
                        <td>
                          <button
                            className="btn btn-primary w-75"
                            onClick={() => {
                              openInfoModal();
                              setInfoId(item);
                            }}
                          >
                            Info
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-warning w-75"
                            onClick={() => {
                              openEditModal();
                              setInfoId(item);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger w-75"
                            onClick={() => {
                              openDeleteModal();
                              setInfoId(item);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  // )
                }
              </tbody>
            </Table>
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
          <div className="addInfo">Item information</div>
          <div className="items-add">
            <div className="booot2">
              <select class="form-control" id="type">
                <option selected disabled>
                  TYPE
                </option>
                <option value="LOST">LOST</option>
                <option value="FOUND">FOUND</option>
              </select>
            </div>

            <FormGroup floating className="booot6">
              <Input id="date" name="Date" placeholder="Date" type="Date" />
              <Label for="date">Date</Label>
            </FormGroup>

            <FormGroup floating className="booot7">
              <Input
                id="contact"
                name="number"
                placeholder="PhoneNumber"
                type="text"
              />
              <Label for="contact">Phone number</Label>
            </FormGroup>

            <div className="booot4">
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
            <div className="booot5">
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

            <div className="booot3">
              <Input type="file" className="form-control " id="file" />
            </div>
            <FormGroup floating className="booot">
              <Input id="name" name="Name" placeholder="Name" type="text" />
              <Label for="name">Name</Label>
            </FormGroup>
            <FormGroup floating className=" booot1  ">
              <Input id="brand" name="Brand" placeholder="Brand" type="text" />
              <Label for="brand">Brand</Label>
            </FormGroup>

            <FormGroup floating className="booot10">
              <Input id="color" name="Color" placeholder="Color" type="text" />
              <Label for="color">Color</Label>
            </FormGroup>
            <FormGroup floating className="booot11">
              <Input
                id="secondary"
                name="Secondarycolor"
                placeholder="Secondary color"
                type="text"
              />
              <Label for="secondary" className="me-4">
                Secondary color
              </Label>
            </FormGroup>

            <textarea
              id="description"
              className="form-control booot8"
              name="des"
              placeholder="Specific description "
              type="text"
            />
            <textarea
              className="form-control booot9"
              id="location"
              name="des2"
              placeholder="Specific location"
              type="text"
            />

            {/* <textarea
              id="description"
              className="form-control booot"
              placeholder="Description"
            /> */}
          </div>
          <div className="addInfo">Address information</div>
          <div className="items-add2">
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
              <Input id="city" name="City" placeholder="City" type="text" />
              <Label for="city">City</Label>
            </FormGroup>

            <FormGroup floating className="buuut">
              <Input
                id="street"
                name="street"
                placeholder="Street"
                type="text"
              />
              <Label for="street">Street</Label>
            </FormGroup>
          </div>
          <div className="float-end mb-5">
            <Button
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              className="bg-danger me-3 mb-4"
              onClick={openAddModal}
            >
              Close
            </Button>
            <Button
              className="bg-success mb-4"
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              onClick={addItem}
            >
              Save
            </Button>
          </div>
        </ModalBody>
        
      </Modal>

      {/* Edit modal */}
      <Modal isOpen={editModal} centered fullscreen scrollable>
        <ModalHeader
          toggle={openEditModal}
          className="text-light fs-4 fw-bolder"
        >
          Edit item
        </ModalHeader>
        <ModalBody className="modal-body p-4 ">
          <div className="addInfo">Item information</div>
          <div className="items-add">
            <div className="booot">
              <Label for="type" className="text-light">
                Type
              </Label>
              <select class="form-control" id="type">
                <option selected disabled>
                  {infoID.type}
                </option>
                <option value="LOST">LOST</option>
                <option value="FOUND">FOUND</option>
              </select>
            </div>

            <div className="booot2">
              <Label for="date" className="text-light">
                Date
              </Label>
              <Input
                id="date"
                name="Date"
                defaultValue={infoID.date}
                type="Date"
              />
            </div>

            <div className="booot1">
              <Label for="contact" className="text-light">
                Phone number
              </Label>
              <Input
                id="contact"
                name="number"
                placeholder="PhoneNumber"
                defaultValue={infoID.contact_info}
                type="text"
              />
            </div>

            <div className="booot3">
              <Label for="category" className="text-light">
                Category
              </Label>
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
            <div className="booot4">
              <Label for="category" className="text-light">
                Sub Category
              </Label>
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

            <div className="booot5">
              <Label for="file" className="text-light">
                Image
              </Label>
              <Input type="file" className="form-control " id="file" />
            </div>
            <div className="booot6">
              <Label for="name" className="text-light">
                Name
              </Label>
              <Input
                id="name"
                name="Name"
                placeholder="Name"
                type="text"
                defaultValue={infoID.name}
              />
            </div>
            <div className="booot7">
              <Label for="brand" className="text-light">
                Brand
              </Label>
              <Input
                id="brand"
                name="Brand"
                placeholder="Brand"
                type="text"
                defaultValue={infoID.brand}
              />
            </div>

            <div className="booot10 mb-4">
              <Label for="color" className="text-light">
                Color
              </Label>
              <Input
                id="color"
                name="Color"
                placeholder="Color"
                type="text"
                defaultValue={infoID.primary_color}
              />
            </div>
            <div className="booot11 mb-4">
              <Label for="secondary" className="me-4 text-light">
                Secondary color
              </Label>
              <Input
                id="secondary"
                name="Secondarycolor"
                placeholder="Secondary color"
                type="text"
                defaultValue={infoID.secondary_color}
              />
            </div>

            <textarea
              id="description"
              className="form-control booot8"
              name="des"
              placeholder="Specific description "
              type="text"
              defaultValue={infoID.specific_description}
            />
            <textarea
              className="form-control booot9"
              id="location"
              name="des2"
              placeholder="Specific location"
              type="text"
              defaultValue={infoID.specific_location}
            />

            {/* <textarea
              id="description"
              className="form-control booot"
              placeholder="Description"
            /> */}
          </div>
          <div className="addInfo">Address information</div>
          <div className="items-add2 mb-4">
            <div>
              <Label for="region" className="text-light">
                Region
              </Label>
              <Input
                id="region"
                name="Region"
                placeholder="Region"
                type="text"
                defaultValue={infoID.country}
              />
            </div>
            <div>
              <Label for="city" className="text-light">
                City
              </Label>
              <Input
                id="city"
                name="City"
                placeholder="City"
                type="text"
                defaultValue={infoID.city}
              />
            </div>

            <div className="buuut">
              <Label for="street" className="text-light">
                Street
              </Label>
              <Input
                id="street"
                name="street"
                placeholder="Street"
                type="text"
                defaultValue={infoID.street}
              />
            </div>
          </div>
          <div className="float-end mb-5">
            <Button
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              className="bg-danger me-3 mb-4"
              onClick={openEditModal}
            >
              Close
            </Button>
            <Button
              className="bg-success mb-4"
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              onClick={editItem}
            >
              Save
            </Button>
          </div>
        </ModalBody>
      </Modal>

      {/* Delete modal */}
      <Modal isOpen={deleteModal} centered size="md" scrollable>
        <ModalHeader
          toggle={openDeleteModal}
          className="text-light fs-4 fw-bolder"
        >
          Delete item
        </ModalHeader>
        <ModalBody className="modal-body p-4 text-light">
          Are you sure you want to delete this item?
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openDeleteModal}
          >
            Close
          </Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={deleteItem}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>

      {/* info modal */}

      <Modal isOpen={infoModal} centered size="md" scrollable>
        <ModalHeader
          toggle={openInfoModal}
          className="text-light fs-4 fw-bolder"
        >
          Info item
        </ModalHeader>
        <ModalBody className="modal-body p-4 text-light">
          Are you sure you want to delete this item?
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openInfoModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Itemspage;
