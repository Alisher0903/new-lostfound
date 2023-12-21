import React from "react";
import "./item-page.scss";
import { Container } from "reactstrap";

function Itemspage() {
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
              <button className="btn btn-primary">+Add</button>
            </div>
            <div className="col-9">
              <button className="btn btn-warning">All items</button>
              <button className="btn btn-success">Found items</button>
              <button className="btn btn-danger">Lost items</button>
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
                  <th scope="col" colSpan={2}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <th scope="row">1</th>
                  <td>
                    <img src="/assets/images/item_image.jpg" alt="..." />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <button className="btn btn-outline-primary">Info</button>
                  </td>
                  <td>
                    <button className="btn btn-outline-warning">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Itemspage;
