import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminExperiences() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemforEdit] = React.useState(null);
    const [type, setType] = React.useState("add");
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post(
                    "/api/portfolio/update-experience",
                    {
                        ...values,
                        _id: selectedItemForEdit._id,
                    }
                );
            } else {
                response = await axios.post(
                    "/api/portfolio/add-experience",
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
            const response = await axios.post(
                "/api/portfolio/delete-experience",
                {
                    _id: item._id,
                }
            );
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
                    Add Experience
                </button>
            </div>

            <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
                {experiences.map((experience) => (
                    <div className="shadow border p-5 border-primary flex flex-col">
                        <h1 className="text-[#45be62] text-xl font-bold">
                            {experience.period}
                        </h1>
                        <hr />
                        <h1 className="text-xl font-semibold">
                            {experience.company}
                        </h1>
                        <h1 className=" text-lg">{experience.title}</h1>
                        <h1>{experience.description}</h1>
                        <div className="flex justify-end gap-2 mt-5">
                            <button
                                className="bg-red-500 text-white px-5 py-2"
                                onClick={() => onDelete(experience)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-primary text-white px-5 py-2"
                                onClick={() => {
                                    setSelectedItemforEdit(experience);
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
                    title={
                        selectedItemForEdit
                            ? "Edit Experience"
                            : "Add Experience"
                    }
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
                        <Form.Item name="period" label="Period">
                            <input placeholder="Period" />
                        </Form.Item>
                        <Form.Item name="company" label="Company">
                            <input placeholder="Company" />
                        </Form.Item>
                        <Form.Item name="title" label="Title">
                            <input placeholder="Title" />
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

export default AdminExperiences;
