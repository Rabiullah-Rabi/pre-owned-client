import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-5 py-16">
      <div className="w-full md:w-2/3 mx-auto">
        {/* qus 1 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p className="text-md ml-6">
            There are four main types of state you need to properly manage in
            your React apps:
            <ol className="list-decimal pl-8">
              <li>Local state</li>
              <li>Global state </li>
              <li>Server state URL state</li>
              <li> URL state</li>
            </ol>
            <b>Local (UI) state -</b> Local state is data we manage in one or
            another component. Local state is most often managed in React using
            the useState hook. <br />
            <b>Global (UI) state –</b> Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. the useState hook. <br />
            <b>Server state –</b> Data that comes from an external server that
            must be integrated with our UI state. Server state is a simple
            concept, but can be hard to manage alongside all of our local and
            global UI state. the useState hook. <br />
            <b>URL state –</b> ata that exists on our URLs, including the
            pathname and query parameters. URL state is often missing as a
            category of state, but it is an important one. In many cases, a lot
            of major parts of our application rely upon accessing URL state. Try
            to imagine building a blog without being able to fetch a post based
            off of its slug or id that is located in the URL!
          </p>
        </div>
        {/* qus 2 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            How does prototypical inheritance work?
          </h1>
          <p className="text-md ml-6">
            ata that exists on our URLs, including the pathname and query
            parameters. URL state is often missing as a category of state, but
            it is an important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state. Try to imagine building a
            blog without being able to fetch a post based off of its slug or id
            that is located in the URL!
          </p>
        </div>
        {/* qus 3 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            What is a unit test? Why should we write unit tests?
          </h1>
          <p className="text-md ml-6">
            <b>Unit Testing</b> is a type of software testing where individual
            units or components of a software are tested. The purpose is to
            validate that each unit of the software code performs as expected.
            Unit Testing is done during the development (coding phase) of an
            application by the developers. Unit Tests isolate a section of code
            and verify its correctness. A unit may be an individual function,
            method, procedure, module, or object.
            <b>Key reasons to perform unit testing: </b>
            <ol className="list-disc pl-8">
              <li>
                Unit tests help to fix bugs early in the development cycle and
                save costs.
              </li>
              <li>
                It helps the developers to understand the testing code base and
                enables them to make changes quickly
              </li>
              <li>Good unit tests serve as project documentation</li>
              <li>
                Unit tests help with code re-use. Migrate both your code and
                your tests to your new project. Tweak the code until the tests
                run again.
              </li>
            </ol>
          </p>
        </div>
        {/* qus 4 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            React vs. Angular vs. Vue?
          </h1>
          <p className="text-md ml-6">
            There are three frameworks for building web applications that every
            frontend developer has heard about: React, Vue.js, and Angular.{" "}
            <br />
            React is a UI library, Angular is a fully-fledged front-end
            framework, while Vue.js is a progressive framework.
            <br />
            They can be used almost interchangeably to build front-end
            applications, but they’re not 100 percent the same, so it makes
            sense to compare them and understand their differences.
            <br />
            Each framework is component-based and allows the rapid creation of
            UI features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
