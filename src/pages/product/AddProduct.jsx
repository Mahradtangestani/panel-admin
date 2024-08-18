import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { initialValues, Onsubmit, validationSchema } from "./core";
import FormikControl from "../../components/form/FormikControl";
import { getCategoryService } from "../../services/category";
import SpinnerLoad from "../../components/SpinnerLoad";
import PrevPagebutton from "../../components/PrevPagebutton";
import SubmitButton from "../../components/form/SubmitButton";
import { getAllBrandsService } from "../../services/brands";
import { getAllColorsService } from "../../services/colors";
import { getAllGuaranteesService } from "../../services/guarantees";

const AddProduct = () => {
  const [parentCategories, setParentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [guarantees, setGuarantees] = useState([]);

  const getAllParentCategories = async () => {
    const res = await getCategoryService();
    if (res.status === 200) {
      setParentCategories(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };

  const getAllBrands = async () => {
    const res = await getAllBrandsService();
    if (res.status === 200) {
      setBrands(
        res.data.data.map((d) => {
          return { id: d.id, value: d.original_name };
        })
      );
    }
  };
  const getAllColors = async () => {
    const res = await getAllColorsService();
    if (res.status === 200) {
      setColors(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };
  const getAllGuarantees = async () => {
    const res = await getAllGuaranteesService();
    if (res.status === 200) {
      setGuarantees(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        })
      );
    }
  };
  useEffect(() => {
    getAllParentCategories();
    getAllBrands();
    getAllColors();
    getAllGuarantees();
  }, []);

  const handleSetMainCategories = async (value) => {
    setMainCategories("waiting");
    if (value > 0) {
      const res = await getCategoryService(value);
      if (res.status === 200) {
        setMainCategories(
          res.data.data.map((d) => {
            return { id: d.id, value: d.title };
          })
        );
      }
    } else {
      setMainCategories([]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => Onsubmit(values, actions)}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="container">
              <h4 className="text-center my-3">افزودن محصول جدید</h4>
              <div className="text-left col-md-6 col-lg-8 m-auto my-3">
                <PrevPagebutton />
              </div>
              <div className="row justify-content-center">
                <FormikControl
                  className="col-12 col-md-6 col-lg-8"
                  control="select"
                  options={parentCategories}
                  name="parentsCats"
                  label="دسته والد"
                  firstItem="دسته مورد نظر را وارد کتید"
                  handleOnChange={handleSetMainCategories}
                />

                {mainCategories === "waiting" ? (
                  <SpinnerLoad isSmall={true} colorClass="text-primary" />
                ) : null}
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={
                    typeof mainCategories == "object" ? mainCategories : []
                  }
                  name="category_id"
                  label="دسته اصلی"
                  firstItem="دسته مورد نظر را انتخاب کنبد..."
                  resultType="string"
                />

                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  label=" عنوان"
                  placeholder="فقط از حروف و اعداد استفاده کنید"
                />

                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="price"
                  label=" قیمت"
                  placeholder="فقط از اعداد استفاده کنید"
                />

                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="weight"
                  label=" وزن"
                  placeholder="فقط از اعداد استفاده کنید"
                />

                <FormikControl
                  label="برند"
                  className="col-md-6 col-lg-8"
                  control="select"
                  options={brands}
                  name="brand_id"
                  firstItem="برند مورد نظر را انتخاب کنبد..."
                />

                <FormikControl
                  label="رنگ"
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={colors}
                  name="color_ids"
                  firstItem="رنگ مورد نظر را انتخاب کنبد..."
                  resultType="string"
                />

                <FormikControl
                  label="گارانتی"
                  className="col-md-6 col-lg-8"
                  control="searchableSelect"
                  options={guarantees}
                  name="guarantee_ids"
                  firstItem="گارانتی مورد نظر را انتخاب کنبد..."
                  resultType="string"
                />

                <FormikControl
                  label="توضیحات"
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="descriptions"
                  placeholder="فقط از حروف واعداد استفاده شود"
                />

                <FormikControl
                  label="توضیحات کوتاه"
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="short_descriptions"
                  placeholder="فقط از حروف واعداد استفاده شود"
                />

                <FormikControl
                  label="توضیحات  سبد"
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  name="cart_descriptions"
                  placeholder="فقط از حروف واعداد استفاده شود"
                />

                <FormikControl
                  label="تصویر"
                  className="col-md-6 col-lg-8"
                  control="file"
                  name="image"
                  placeholder="تصویر"
                />

                <FormikControl
                  label="توضیح تصویر "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="alt_image"
                  placeholder="فقط از حروف و اعداد استفاده کنید"
                />

                <FormikControl
                  label="کلمات کلیدی "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="keywords"
                  placeholder="مثلا: تست1-تست2-تست3"
                />

                <FormikControl
                  label="موجودی "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="stock"
                  placeholder="فقط از اعداد استفاده کنید(عدد)"
                />

                <FormikControl
                  label="درصد تخفیف "
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="number"
                  name="discount"
                  placeholder="فقط از اعداد استفاده کنید(درصد)"
                />
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <SubmitButton />
                  <PrevPagebutton className="me-2" />
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
