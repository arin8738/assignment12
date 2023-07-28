/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import useTitle from "../../Title/Title";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="mb-20">
      <div className="text-center my-12">
        <h3 className="text-3xl font-semibold mb-3 text-my-blue">
          All <span className="text-my-pink">Blogs</span>
        </h3>
        <p className="text-base">
        Make play time a blast with our finest toys and games!
        </p>
      </div>

      <div className="actual-receipt">
        <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
          <h1 className="text-3xl mb-3 font-semibold text-center text-my-pink">
            Q1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <div className="mb-5">
            <p className="text-lg mt-3">
              <span className="text-my-blue font-semibold">
                Access Token :{" "}
              </span>
              A secure string that a client uses to access protected resources.
              An instance issues access tokens to clients that have a valid
              authorization grant. Each access token has a specific scope,
              lifespan, and other attributes. By default, an instance issues
              access tokens with a 30-minute lifespan in the scenario where the
              instance is the OAuth provider. For third-party tokens, 30 days.
            </p>
          </div>

          <div>
            <p className="text-lg mt-2">
              <span className="text-my-blue font-semibold">
                Refresh Token :{" "}
              </span>
              A credential that a client uses to obtain new access tokens
              without requiring additional user authorization. An instance
              issues a refresh token to a client when it is first authorized to
              have an access token. By default, an instance issues refresh
              tokens with a 100-day lifespan in the scenario where the instance
              is the OAuth provider. For third-party tokens, 365 days.
            </p>
          </div>

          <div>
            <p className="text-lg mt-2">
              <span className="text-my-blue font-semibold">
              How do they work? {" "} <br />
              </span>
              Normally, a user with an access token can only access protected resources or perform specific actions for a set period of time, which reduces the risk of the token being compromised. A refresh token allows the user to get a new access token without needing to log in again.
            </p>
          </div>

          <div>
          
            <p className="text-lg mt-2">
              <span className="text-my-blue font-semibold">
              Where should we store them on the client-side? {" "} <br />
              </span>
              You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
            </p>
          </div>
        </div>

        <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
          <h1 className="text-3xl font-semibold text-center text-my-pink">
            Q2. Compare SQL and NoSQL databases?
          </h1>
          <div className="mb-5 grid grid-cols-2">
            <div>
              <h3 className="text-my-blue text-2xl font-semibold text-center my-5 bg-base-200">
                SQL
              </h3>
              <ul className="text-lg pl-5">
                <li className="list-decimal my-2">
                  Stands for Structured Query Language
                </li>
                <li className="list-decimal my-2">
                  Relational database management system (RDBMS)
                </li>
                <li className="list-decimal my-2">
                  Suitable for structured data with predefined schema
                </li>
                <li className="list-decimal my-2">
                  Data is stored in tables with columns and rows
                </li>
                <li className="list-decimal my-2">
                  Supports JOIN and complex queries
                </li>
                <li className="list-decimal my-2">
                  Uses normalized data structure
                </li>
                <li className="list-decimal my-2">
                  Requires vertical scaling to handle large volumes of data
                </li>
                <li className="list-decimal my-2">
                  Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL
                  Server
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-my-blue text-2xl font-semibold text-center my-5 bg-base-200">
                NoSQL
              </h3>
              <ul className="text-lg pl-5 border-l-2">
                <li className="ml-5 list-decimal my-2">
                  Stands for Not Only SQL
                </li>
                <li className="ml-5 list-decimal my-2">
                  Non-relational database management system
                </li>
                <li className="ml-5 list-decimal my-2">
                  Suitable for unstructured and semi-structured data
                </li>
                <li className="ml-5 list-decimal my-2">
                  Data is stored in collections or documents
                </li>
                <li className="ml-5 list-decimal my-2">
                  Does not support JOIN and complex queries
                </li>
                <li className="ml-5 list-decimal my-2">
                  Uses denormalized data structure
                </li>
                <li className="ml-5 list-decimal my-2">
                  Horizontal scaling is possible to handle large volumes of data
                </li>
                <li className="ml-5 list-decimal my-2">
                  Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB,
                  Redis
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
          <h1 className="text-3xl font-semibold text-center text-my-pink">
            Q3. What is express js?
          </h1>
          <div className="mb-5">
            <p className="text-lg mt-3">
              <span className="text-my-blue font-semibold">Express JS: </span>
              Express.js is a small framework that works on top of Node.js web
              server functionality to simplify its APIs and add helpful new
              features. It makes it easier to organize your application’s
              functionality with middleware and routing. It adds helpful
              utilities to Node.js HTTP objects and facilitates the rendering of
              dynamic HTTP objects.
            </p>
          </div>
        </div>

        <div className="w-4/5 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-5 border-solid border-my-primary border-2">
          <h1 className="text-3xl font-semibold text-center text-my-pink">
            Q4. What is MongoDB aggregate and how does it work?
          </h1>
          <div className="mb-5">
            <p className="text-lg mt-3">
              <span className="text-my-blue font-semibold">
                MongoDB aggregate :{" "}
              </span>
              In MongoDB, aggregation operations process the data
              records/documents and return computed results. It collects values
              from various documents and groups them together and then performs
              different types of operations on that grouped data like sum,
              average, minimum, maximum, etc to return a computed result. It is
              similar to the aggregate function of SQL.
            </p>
            <p className="text-lg mt-3">
              <span className="text-my-blue font-semibold">
                MongoDB provides three ways to perform aggregation :{" "}
              </span>
              <ul className="text-lg pl-5">
                <li className="list-decimal my-2">Aggregation pipeline</li>
                <li className="list-decimal my-2">Map-reduce function</li>
                <li className="list-decimal my-2">
                  Single-purpose aggregation
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
