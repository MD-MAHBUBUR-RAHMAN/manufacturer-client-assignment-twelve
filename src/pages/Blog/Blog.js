import React from "react";

const Blog = () => {
  return (
    <div className="md:mx-48 my-20 px-5">
      <h4 className="text-xl font-bold mb-5 text-red-500 mt-5">
        What is unit testing?
      </h4>
      <p className="md:text-lg md:font-medium">
        Unit testing is testing the smallest testable unit of an application. It
        is done during the coding phase by the developers. A developer writes a
        piece of code (unit tests) to ensure that a section of an application
        (known as the "unit") meets its design and behaves as intended.
      </p>
      <h4 className="text-xl font-bold mb-5 text-red-500 mt-5">
        Why should write unite tests?
      </h4>
      <p className="md:text-lg md:font-medium">
        If done correctly, unit tests can be a great investment. Unit testing
        helps developers to find bugs early. Unit testing simplifies the
        debugging process. When a test fails, only the newest changes made in
        the code need to be checked. Unit testing can be easily integrated into
        the software build process, making it easy to report errors quickly.
        Since unit testing can be automated, it can decrease the total testing
        cost.
      </p>
      <h4 className="text-xl font-bold mb-5 text-red-500 mt-5">
        How does prototypical inheritance work?
      </h4>
      <p className="md:text-lg md:font-medium">
        In JavaScript, each object has a private property that holds a link to
        another object called its prototype. The prototype object has a
        prototype of its own. By this method, an object can inherit the
        properties and methods of another object. / Prototypal Inheritance is
        when an object can point to another object and inherit all its
        properties. The main purpose is to allow multiple instances of an object
        to share common properties, hence, the Singleton Pattern.
      </p>
      <h4 className="text-xl font-bold mb-5 text-red-500 mt-5">
        Why you do not set the state directly in React?
      </h4>
      <p className="md:text-lg md:font-medium">
        To change a value in the state object, use the setState() method. When a
        value in the state object changes, the component will re-render, meaning
        that the output will change according to the new value(s). React will
        then look at the virtual DOM, it also has a copy of the old virtual DOM,
        that is why we shouldn't update the state directly, so we can have two
        different object references in memory, we have the old virtual DOM as
        well as the new virtual DOM. The process to update React state is
        asynchronous for performance reasons.
      </p>
      <h4 className="text-xl font-bold mb-5 text-red-500 mt-5">
        How will you improve the performance of a React Application?
      </h4>
      <p className="md:text-lg md:font-medium">
        There are many ways where we can speed up React application.
      </p>
      <p className="md:text-lg md:font-medium">
        Use React Fragment to avoid adding extra nodes to the DOM.
      </p>
      <p className="md:text-lg md:font-medium">
        By default, React app is in development mode, which means React will
        include helpful warnings. This can be very useful while developing, but
        it can make the app size large and responses slower than usual. To solve
        this we should use production build before deploying.
      </p>
      <p className="md:text-lg md:font-medium">
        React comes bundled with the React.lazy() API so that you can render a
        dynamic import as a regular component. Lazy loading is a great technique
        for optimizing and speeding up the render time of your app.
      </p>

      <p className="md:text-lg md:font-medium">
        React.memo() is a great way of optimizing performance as it helps cache
        functional components.
      </p>
      <p className="md:text-lg md:font-medium">
        Virtualization can help in a scenario like this with the help of a
        library like react-window. react-window helps solve this problem by
        rendering only the items in the list that are currently visible, which
        allows for efficiently rendering lists of any size.
      </p>
      <p className="md:text-lg md:font-medium">
        Try to avoid inline Function definition in the render function.
      </p>
      <p className="md:text-lg md:font-medium">
        Avoid using the index as key for map.
      </p>
      <p className="md:text-lg md:font-medium">
        Don't initialize the state with props that can be changed later.
      </p>
      <h4 className="text-xl font-bold mb-5 text-red-500 mt-5">
        What are the different ways to manage a state in a react application?
      </h4>
      <div className="md:text-lg md:font-medium">
        <p>
          There are four main types of states we need to properly manage in our
          React apps:
        </p>
        <p>
          Local (UI) state – Local state is most often managed in React using
          the useState() hook. By setting data in this state we can change our
          state and track the value of a component.
        </p>
        <p>
          Global (UI) state – Global state is necessary when we want to get and
          update data anywhere in our app, or in multiple components at least.
        </p>
        <p>
          Server state – there are several pieces of state that must be managed
          every time you fetch or update data from an external server, including
          loading and error states. Data that comes from an external server must
          be integrated with our UI state. SWR and React Query make managing
          server state much easier.
        </p>
        <p>
          URL state – Data that exists on our URLs, including the pathname and
          query parameters. There are undoubtedly more pieces of state that we
          could identify, but these are the major categories worth focusing on
          for most applications you build.
        </p>
      </div>
    </div>
  );
};

export default Blog;
