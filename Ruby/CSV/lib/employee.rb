class Employee

  def initialize(name, emp_id)
    @name = name
    @emp_id = emp_id
  end
  
  def to_s
    "#{ @name } (EmpId:#{ @emp_id })"
  end

end
