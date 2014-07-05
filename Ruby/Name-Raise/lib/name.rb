class Name

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def validate_and_throw_exception
    begin
      if(@firstname.length == 0 || @lastname.length == 0)
        raise 'Names are Empty'
      elsif(@firstname != @firstname.capitalize)
        raise 'First letter of the Firstname should be Capital'
      end
      "Welcome #{@firstname} #{@lastname}"
      rescue Exception => name
        name.message
    end
  end

end
