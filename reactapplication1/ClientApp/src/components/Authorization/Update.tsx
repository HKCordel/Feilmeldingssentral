/*

import React, { Component } from "react";
import {fetchBlogPost, updateBlogPost} from "../Testing/PostData";

export class Update extends Component<{params: any}, {blogPost: any}> {

    constructor(props: any) {
        super(props);
        this.state = {blogPost: {}};
    }

    public componentDidMount() {
        fetchBlogPost(this.props.params.postId)
            .then((IsActive) => {
                this.setState((state) => {
                    state.blogPost = IsActive;
                    return state;
                });
            })
            .catch((err) => {
                // tslint:disable-next-line:no-console
                console.error("err", err);
            });
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}
                    title={this.state.blogPost.title}
                    body={this.state.blogPost.body}>
                </form>
            </div>
        );
    }
    private handleSubmit(data) {
        updateBlogPost(this.state.blogPost.id, data);
        this.props.router.push("/");
    }
}

export default Update;

*/

// In order to suppress compilation error on empty file
const Update = {};
export default Update;
