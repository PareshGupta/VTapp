require_relative '../lib/name_error.rb'

class Name
  CHECK_NAME_REGEX = /[a-z]|[\d]/

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def validate?
    if(@firstname.length == 0 || @lastname.length == 0)
      raise NameError, 'Invalid Name'
    elsif(@firstname[0].match(CHECK_NAME_REGEX))
      raise NameError, 'Invalid Name'
    end
    "#{ @firstname } #{ @lastname }"
  end

end
