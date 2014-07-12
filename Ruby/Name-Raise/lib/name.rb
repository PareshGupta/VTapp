require_relative '../lib/name_error.rb'

class Name
  CHECK_NAME_REGEX = /[a-z]|[\d]/

  def initialize(firstname, lastname)
    @firstname = validate_length!(firstname) && is_capital!(firstname)
    @lastname = validate_length!(lastname)
  end

  def validate_length!(name)
    if name.nil? || name.empty?
      raise NameError, 'Name is Empty'
    else
      name
    end
  end

  def is_capital!(name)
    if name[0].match(CHECK_NAME_REGEX)
      raise NameError, 'First-letter of the name is not Capital'
    else
      name
    end
  end

  def to_s
    "#{ @firstname } #{ @lastname }"
  end

end
