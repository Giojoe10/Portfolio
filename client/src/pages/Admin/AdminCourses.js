import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminCourses() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { courses } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemforEdit] = React.useState(null);
    const [type, setType] = React.useState("add");
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());

            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-course", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post(
                    "/api/portfolio/add-course",
                    values
                );
            }
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemforEdit(null);
                dispatch(ReloadData(true));
                form.resetFields();
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/delete-course", {
                _id: item._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <div>
            <div className="flex justify-end pb-5">
                <button
                    className="bg-primary text-white px-5 py-2"
                    onClick={() => {
                        setSelectedItemforEdit(null);
                        setShowAddEditModal(true);
                        setType("add");
                    }}
                >
                    Add Course
                </button>
            </div>

            <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
                {courses.map((course) => (
                    <div className="shadow border p-5 border-primary flex flex-col">
                        <h1 className="text-[#45be62] text-xl font-bold">
                            {course.title}
                        </h1>
                        <hr />
                        <img src={course.image} className="h-60 w-80 rounded-md" alt=""/>
                        <h1>{course.description}</h1>
                        <div className="flex justify-end gap-2 mt-5">
                            <button
                                className="bg-red-500 text-white px-5 py-2"
                                onClick={() => onDelete(course)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-primary text-white px-5 py-2"
                                onClick={() => {
                                    setSelectedItemforEdit(course);
                                    setShowAddEditModal(true);
                                    setType("edit");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {(type === "add" || selectedItemForEdit) && (
                <Modal
                    open={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Course" : "Add Course"}
                    footer={null}
                    onCancel={() => {
                        setShowAddEditModal(false);
                        setSelectedItemforEdit(null);
                    }}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={selectedItemForEdit}
                    >
                        <Form.Item name="title" label="Title">
                            <input placeholder="Title" />
                        </Form.Item>
                        <Form.Item name="image" label="Image">
                            <input placeholder="Image" />
                        </Form.Item>
                        <Form.Item name="description" label="Description">
                            <textarea placeholder="Description" />
                        </Form.Item>

                        <div className="flex justify-end">
                            <button
                                className="border-primary text-primary px-5 py-2"
                                onClick={() => {
                                    setShowAddEditModal(false);
                                    setSelectedItemforEdit(null);
                                }}
                            >
                                Cancel
                            </button>
                            <button className="bg-primary text-white px-5 py-2">
                                {selectedItemForEdit ? "Update" : "Add"}
                            </button>
                        </div>
                    </Form>
                </Modal>
            )}
        </div>
    );
}

export default AdminCourses;
