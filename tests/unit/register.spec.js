import { shallowMount } from "@vue/test-utils";
import RegisterPage from "@/pages/Auth/RegisterPage.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

const mockRouter = {
  push: jest.fn(),
};
const $t = (key) => key;
jest.mock("axios", () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("RegisterPage", () => {
  it("submits the form", async () => {
    const swalMock = jest.fn();

    const wrapper = shallowMount(RegisterPage, {
      global: {
        mocks: {
          $t,
          $swal: swalMock, // Mock the $swal function
          $router: mockRouter, // Заглушка для $router.push
        },
        components: {
          MyInput,
          MyButton,
        },
      },
    });
    const expectedText = $t("signup.signup");
    expect(wrapper.text()).toContain(expectedText);

    const inputs = wrapper.findAllComponents(MyInput);
    expect(inputs).toHaveLength(6);

    const firstnameInput = inputs[0];
    firstnameInput.setValue("Alina");
    expect(wrapper.vm.firstname).toBe("Alina");

    const lastnameInput = inputs[1];
    lastnameInput.setValue("Zahovora");
    expect(wrapper.vm.lastname).toBe("Zahovora");

    const emailInput = inputs[2];
    emailInput.setValue("alina.zahovora@nure.com");
    expect(wrapper.vm.email).toBe("alina.zahovora@nure.com");

    const phoneInput = inputs[4];
    phoneInput.setValue("1234567890");
    expect(wrapper.vm.phone).toBe("1234567890");

    const passwordInput = inputs[5];
    passwordInput.setValue("111111");
    expect(wrapper.vm.password).toBe("111111");

    // Проверка ошибок
    const errorElement = wrapper.find(".error");
    expect(errorElement.exists()).toBeFalsy();

    wrapper.find("form").trigger("submit");
  });
});
