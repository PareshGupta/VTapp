require_relative '../lib/name_error.rb'

class Name
  CHECK_NAME_REGEX = /[a-z]|[\d]/

  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def validate!
    if @firstname.nil? || @firstname.length == 0
      raise NameError, 'Firstname is Invalid'
    elsif @firstname[0].match(CHECK_NAME_REGEX)
      raise NameError, 'Firstname First-letter is not Capital'
    elsif @lastname.nil? || @lastname.length == 0
      raise NameError, 'Lastname is Invalid'
    end
    "#{ @firstname } #{ @lastname }"
  end

end
