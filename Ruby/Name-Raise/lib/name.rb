require_relative '../lib/invalid_name_error.rb'

class Name
  CHECK_LOWERCASE_ALPHABETS_OR_DIGITS_REGEX = /[a-z]|[\d]/

  def initialize(firstname, lastname)
    @firstname = validate_length?(firstname) ? check_first_letter_capital!(firstname) : (raise InvalidNameError, 'First name is blank')
    @lastname = validate_length?(lastname) ? lastname : (raise InvalidNameError, 'Last name is blank')
  end

  def to_s
    "#{ @firstname } #{ @lastname }"
  end

  private
    def validate_length?(name)
      if name.nil? || name.empty?
        false
      else
        true
      end
    end

    def check_first_letter_capital!(name)
      if name[0].match(CHECK_LOWERCASE_ALPHABETS_OR_DIGITS_REGEX)
        raise InvalidNameError, "First letter of the '#{ name }' is not capital"
      else
        name
      end
    end
end
