require_relative '../lib/invalid_name_error.rb'

class Name
  CHECK_LOWERCASE_ALPHABETS_OR_DIGITS_REGEX = /[a-z]|[\d]/

  def initialize(firstname, lastname)
    @firstname = validate_length!(firstname) && check_first_letter_capital!(firstname)
    @lastname = validate_length!(lastname)
  end
  
  private
    def validate_length!(name)
      if name.nil? || name.empty?
        raise NameError, "Name is Empty"
      else
        name
      end
    end
  
  private
    def check_first_letter_capital!(name)
      if name[0].match(CHECK_LOWERCASE_ALPHABETS_OR_DIGITS_REGEX)
        raise NameError, 'First-letter of the name is not Capital'
      else
        name
      end
    end

  def to_s
    "#{ @firstname } #{ @lastname }"
  end

end
