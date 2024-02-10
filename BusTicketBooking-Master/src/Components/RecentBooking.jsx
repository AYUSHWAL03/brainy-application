import React from "react";

const RecentBooking = () => {
  return (
    <>
      <div class="container">
        <table class="table table-border table-bordered table-striped table-hover border border-dark text-danger" id="myTable" data-aos="fade-up">
          <thead>
            <tr>
              <th>Name</th>
              <th>Journey Date</th>
              <th>Email</th>
              <th>Bus Details</th>
              <th>Set Details</th>
            </tr>
          </thead>
          <tbody>
            <tr data-aos="fade-up">
              <td>Demo</td>
              <td>11/11/2023</td>
              <td>Test@gmail.com</td>
              <td>Ambd / Rajkot</td>
              <td>23/24</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="500">
              <td>abc</td>
              <td>11/11/2023</td>
              <td>abc@gmail.com</td>
              <td>Ambd / Pbr</td>
              <td>23/24</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="1000">
              <td>xyz</td>
              <td>11/11/2023</td>
              <td>xyz@gmail.com</td>
              <td>Pbr / Rajkot</td>
              <td>23/24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecentBooking;
