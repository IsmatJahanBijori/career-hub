import React from 'react';

const Blog = () => {
    return (
        <div className='m-20'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    1. When we use Context API?
                </div>
                <div className="collapse-content">
                    <p>Normally, when we want to share data between components, we use props drilling method. But this method shares data from parent component to child component. To avoid this problem, the concept of context API comes. It helps to share data between components which can't easily shared by using props.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    2. What is React Custom Hook?
                </div>
                <div className="collapse-content">
                    <p>Custom Hooks are reuseable function that helps to reduce code complexity. It helps to add special and unique functionality to the React applications. For instance, you may place that code within a custom hook and reuse it rather than writing the same code across several components that use the same common stateful logic.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    3. What is useRef and how does it work?
                </div>
                <div className="collapse-content">
                    <p>useRef returns a mutable ref object whose allows you to persist values between renders. It can be used to hold a mutable value that doesn't require a re-rendering when updated.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is useMemo and how does it work?
                </div>
                <div className="collapse-content">
                    <p>A resource-intensive function that has been provided to useMemo() will have its value memoized. The useMemo Hook only runs when one of its dependencies update. It has two parameters, one is calculateValue and the other is dependencies. useMemo returns the result of calling calculateValue with no arguments.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;