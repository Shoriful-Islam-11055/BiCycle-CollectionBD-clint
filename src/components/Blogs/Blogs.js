import React from "react";
import jsVsNode from "../../images/others/js_node.PNG";
import SQLVsNoSQL from "../../images/others/SQL-Vs-NoSQL1.png";

const Blogs = () => {
  return (
    <div className="px-3">
      <h2 className="section-title text-center">Some questions answer</h2>
      <div className="card mb-3 border-0">
        <h4 className="p-2">1. Difference between Node.JS and Javascript</h4>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={jsVsNode} className="img-fluid py-3" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="card-text">
                <table className="table table-hover bg-white">
                  <thead>
                    <tr>
                      <th scope="col">Sr.no</th>
                      <th scope="col">JavaScript</th>
                      <th scope="col">Node JS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        It is a dynamic and web application programming language
                        that is open-source, cross-platform, interpreted, and
                        lightweight.
                      </td>
                      <td>
                        It's an open-source, cross-platform JavaScript runtime
                        environment that lets you run JavaScript on the server.
                        It's a programming language, after all.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Any browser with a competent browser engine will
                        operate.
                      </td>
                      <td>
                        It's a JavaScript interpreter and environment that
                        includes several useful libraries for JavaScript
                        development.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        It's most commonly utilized on client-side servers.
                      </td>
                      <td>It's most commonly utilized on the server side.</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>It's made for creating network-centric apps.</td>
                      <td>
                        It's made for real-time data-intensive apps that operate
                        on several platforms.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 border-0">
        <h4 className="p-2">
          2. When should you use nodejs and when should you use mongodb
        </h4>
        <div className="row g-0">
          <div className="col-md-6">
            <h5 class="card-title">When should you use nodejs?</h5>
            When creating apps that operate in real-time and process a large
            number of client requests, Node.js is the best choice. For web-based
            apps that demand a great user experience and quick response time,
            Node.js is the ideal choice. Advanced security features, such as
            live chats and instant messaging applications, online gaming, video
            conferencing, and collaborative platforms, are not necessary. In
            comparison to more inflexible technologies like Ruby on Rails,
            Node.js produces better outcomes on such projects. It can
            effectively manage several queries and respond quickly. As a result,
            it's great for creating client-facing web applications. This
            technology has its own set of benefits. Among the most prominent
            are: It uses a model that doesn't hinder I/O, allowing it to handle
            several requests at the same time. Ensures that client queries are
            responded to quickly (even on high-volume platforms) and that the
            technology is scalable. Web apps fulfill the growing customer demand
            for faster speed and simpler access to information and services
            thanks to Node.js's versatile and responsive runtime environment. It
            eliminates the need for programmers to master several technologies
            because it provides a complete solution for full-stack development.
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <div className="card-text">
                <h5 class="card-title">When should you use mongodb?</h5>
                MongoDB is a document-oriented database that is open source and
                cross-platform, and is commonly referred to as a NoSQL database.
                It indicates that, rather than traditional table-based RDBMS,
                JSON with dynamic schemas is the focus. So, when should you
                utilize this? High Write Load- You can use it if you need to
                load rows of data without worrying about security. However,
                unless security is established, avoid utilizing with
                transactions. High Availability in the Cloud- Setting up a chain
                of master-slave servers is easier, and recovery from failure is
                also faster. Scalability- RDBMS has its own scalability
                restrictions, particularly in terms of performance, which
                frequently degrades. MongoDB has a built-in partitioning and
                database sharding solution. Big Data Sets And Unstable Schema-
                MongoDB is a suitable choice when working with tables greater
                than 1 GB and whose schema is never constant. Unlike a standard
                RBDMS, when you add a new field to MongoDB, it has no influence
                on current rows and is quicker.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 border-0">
        <h4 className="p-2">3. Differences between sql and nosql databases.</h4>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={SQLVsNoSQL} className="img-fluid py-3" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="card-text">
                <table className="table table-hover bg-white">
                  <thead>
                    <tr>
                      <th scope="col">Sr.no</th>
                      <th scope="col">SQL</th>
                      <th scope="col">NoSQL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        RDBMS stands for Relational Database Management Systems.
                      </td>
                      <td>
                        Non-relational or distributed databases are the most
                        common names for NoSQL databases.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Language for structured queries (SQL).</td>
                      <td>No declarative query language is available.</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Table-based databases are SQL databases.</td>
                      <td>
                        Document databases, key-value pairs databases, and graph
                        databases are all examples of NoSQL databases.{" "}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>SQL databases may be scaled vertically.</td>
                      <td>NoSQL databases can scale horizontally.</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Oracle, Postgres, and MS-SQL.</td>
                      <td>MongoDB, Redis, Neo4j, Cassandra, Hbase.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
