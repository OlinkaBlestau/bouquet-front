import { shallowMount } from "@vue/test-utils";
import AddFlowersPage from "@/pages/Admin/AddFlowersPage.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

jest.mock("axios", () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

const $t = (key) => key; // Mock implementation for $t function

describe("AddFlowersPage", () => {
  it("submits the form", async () => {
    // Create mock functions for asynchronous methods
    const createFlowerMock = jest.fn().mockResolvedValue({});
    const imageFlowerUploadMock = jest.fn().mockResolvedValue({});
    const swalMock = jest.fn();

    // Mount the component with mocks and stubs
    const wrapper = shallowMount(AddFlowersPage, {
      mocks: {
        createFlower: createFlowerMock,
        imageFlowerUpload: imageFlowerUploadMock,
        $swal: swalMock,
        $t, // Mock implementation for $t function
      },
      components: {
        MyInput,
        MyButton,
      },
    });

    // Fill the form with data
    wrapper.setData({
      name: "Test Name",
      color: "Test Color",
      price: "10",
      storage_flowers_amount: "5",
      img_path: "test.jpg",
    });

    // Wait for the form to be submitted
    await wrapper.find("form").trigger("submit.prevent");

    // Check the mock function calls
    expect(createFlowerMock).toHaveBeenCalledWith({
      name: "Test Name",
      color: "Test Color",
      price: "10",
      storage_flowers_amount: "5",
    });

    expect(imageFlowerUploadMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(FormData)
    );

    // Check the swalMock call
    expect(swalMock).toHaveBeenCalledWith(
      expect.objectContaining({ icon: "success" })
    );

    // Check the user redirection
    expect(window.location.href).toBe("/view-flowers");
  });
});
