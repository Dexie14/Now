import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const FormPage = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFiles, setSelectedFiles] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileDelete = () => {
    setSelectedFile(null);
  };
  const handleFileChanges = (event) => {
    const file = event.target.files[0];
    setSelectedFiles(file);
  };

  const handleFileDeletes = () => {
    setSelectedFile(null);
  };

  return (
    <div className="col-xl-9 col-12 mx-auto py-3 px-5">
      <Form>
        <section className="d-md-flex justify-content-between">
          <FormGroup className="col-md-5">
            <Label for="name" style={{ fontSize: "12px" }}>
              Community Name
            </Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Community Name"
              type="text"
              className="px-3 bg-transparent "
              style={{ fontSize: "14px" }}
            />
          </FormGroup>
          <FormGroup className="col-md-5">
            <Label for="slug" style={{ fontSize: "12px" }}>
              Community Slug
            </Label>
            <Input
              id="slug"
              name="slug"
              required
              placeholder="Community Slug"
              type="text"
              className="px-3 bg-transparent "
              style={{ fontSize: "14px" }}
            />
          </FormGroup>
        </section>
        <FormGroup>
          <Label for="description" style={{ fontSize: "12px" }}>
            Describe your Community
          </Label>
          <Input
            id="description"
            name="description"
            required
            placeholder="Describe your Community"
            type="text"
            className="px-3 bg-transparent "
            style={{ fontSize: "14px" }}
          />
        </FormGroup>
        <section className="d-md-flex justify-content-between ">
          <FormGroup className="col-md-5">
            <Label for="category" style={{ fontSize: "12px" }}>
              Category
            </Label>
            <Input
              id="category"
              name="category"
              required
              placeholder="Category "
              type="text"
              className="px-3 bg-transparent "
              style={{ fontSize: "14px" }}
            />
          </FormGroup>
          <div className="col-md-5">
            <Label for="" style={{ fontSize: "12px" }}>
              Color Palette
            </Label>
            <section className="d-flex gap-3 justify-content-between ">
              <FormGroup className="d-flex gap-2 align-items-center ">
                <Label check>Primary</Label>{" "}
                <Input
                  type="checkbox"
                  required
                  className="px-3 py-3 border-0 "
                  style={{ background: "#a4a4a4" }}
                />
              </FormGroup>
              <FormGroup className="d-flex gap-2 align-items-center ">
                <Label check>Ascent</Label>{" "}
                <Input type="checkbox" required className="px-3 py-3 bg-transparent " />
              </FormGroup>
            </section>
          </div>
        </section>
        <section>
          <Label for="" style={{ fontSize: "12px" }}>
            Typography
          </Label>
          <div className="d-md-flex justify-content-between ">
            <FormGroup className="col-md-5 d-flex gap-2 align-items-center ">
              <Label for="headline" style={{ fontSize: "12px" }}>
                Headline
              </Label>
              <Input
                id="headline"
                name="select"
                type="select"
                required
                className="bg-transparent"
                style={{ fontSize: "13px" }}
              >
                <option selected>Select Font</option>
                <option>Arial</option>
                <option>Tahoma</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-md-5 d-flex gap-2 align-items-center">
              <Label for="body" style={{ fontSize: "12px" }}>
                Body
              </Label>
              <Input
                id="body"
                name="select"
                type="select"
                required
                className="bg-transparent"
                style={{ fontSize: "13px" }}
              >
                <option selected>Select Font</option>
                <option>Arial</option>
                <option>Tahoma</option>
              </Input>
            </FormGroup>
          </div>
        </section>
        <section className="d-md-flex justify-content-between ">
          <div className="col-md-5">
            <Label for="" style={{ fontSize: "12px" }}>
              Brand Icon
            </Label>
            <div className="w-100 ">
              <input
                id="brand"
                name="brand"
                type="file"
                required
                className="bg-transparent d-none"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleFileChange}
                style={{ fontSize: "14px" }}
              />
              <label htmlFor="brand" className="cursor-pointer" type="button">
                {selectedFile ? (
                  <div className="position-relative ">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt={selectedFile.name}
                      className="object-fit-cover rounded-md bg-info-subtle"
                      style={{ height: "100px", width: "100px" }}
                    />
                    <button
                      className=" position-absolute bg-danger text-white p-1 rounded-1"
                      style={{ top: "6px", right: "2px" }}
                      onClick={handleFileDelete}
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <div className="w-100">
                    <p
                      className="text-black px-5 py-3 rounded-2 text-center "
                      style={{
                        fontSize: "12px",
                        background: "#efefef",
                        minWidth: "280px",
                      }}
                    >
                      Click to Upload Image
                    </p>
                  </div>
                )}
              </label>
              <p className="text-center" style={{ fontSize: "12px" }}>
                Jpg, Gif or PNG
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <Label for="" style={{ fontSize: "12px" }}>
              Brand Icon
            </Label>
            <div className="w-100">
              <input
                id="branded"
                name="brand"
                type="file"
                required
                className="bg-transparent d-none"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleFileChanges}
                style={{ fontSize: "14px" }}
              />
              <label htmlFor="branded" className="cursor-pointer" type="button">
                {selectedFiles ? (
                  <div className="position-relative ">
                    <img
                      src={URL.createObjectURL(selectedFiles)}
                      alt={selectedFiles.name}
                      className="object-fit-cover rounded-md bg-info-subtle"
                      style={{ height: "100px", width: "100px" }}
                    />
                    <button
                      className=" position-absolute bg-danger text-white p-1 rounded-1"
                      style={{ top: "6px", right: "2px" }}
                      onClick={handleFileDeletes}
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <div className="w-100">
                    <p
                      className="text-black px-5 py-3 rounded-2 text-center "
                      style={{
                        fontSize: "12px",
                        background: "#efefef",
                        minWidth: "280px",
                      }}
                    >
                      Click to Upload Image
                    </p>
                  </div>
                )}
              </label>
              <p className="text-center" style={{ fontSize: "12px" }}>
                Jpg, Gif or PNG
              </p>
            </div>
          </div>
        </section>
        <div className="d-flex justify-content-center ">
          <Button
            className="w-50"
            style={{ background: "#262729", color: "#cc8c17" }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormPage;
