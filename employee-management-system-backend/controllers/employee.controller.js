const Employee = require("../models/employee.model");

// GET all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving employees", error });
  }
};

// GET employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving employee", error });
  }
};

// POST create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const { name, email, department, joining_date } = req.body;
    const newEmployee = await Employee.create({ name, email, department, joining_date });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error creating employee", error });
  }
};

// PUT update employee
exports.updateEmployee = async (req, res) => {
  try {
    const { name, email, department, joining_date } = req.body;
    const employee = await Employee.findByPk(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    await employee.update({ name, email, department, joining_date });
    res.status(200).json({ message: "Employee updated successfully", employee });
  } catch (error) {
    res.status(500).json({ message: "Error updating employee", error });
  }
};

// DELETE employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    await employee.destroy();
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee", error });
  }
};
