import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Modal, Form } from "antd";

function AdminExperiences() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemforEdit] = React.useState(null);
    return (
        <div>
            <div className="flex justify-end">
                <button className="bg-primary text-white px-5 py-2">
                    Add Experience
                </button>
            </div>

            <div className="grid grid-cols-4 gap-5">
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
                            <button className="bg-red-500 text-white px-5 py-2">
                                Delete
                            </button>
                            <button className="bg-primary text-white px-5 py-2">
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                open={showAddEditModal}
                title={
                    selectedItemForEdit ? "Edit Experience" : "Add Experience"
                }
            >
                <Form style="vertical">
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

                    <div className="flex">
                        <button
                            className="border-primary text-primary px-5 py-2"
                            onClick={setShowAddEditModal(false)}
                        >
                            Cancel
                        </button>
                        <button className="bg-primary text-white px-5 py-2">
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default AdminExperiences;
