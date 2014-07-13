require 'date'

class Time
  CHECK_TIME_REGEX = /(^([0-1]?\d|2[0-3]?)\:([0-5]?\d)\:([0-5]?\d)$)/
  attr_reader :total_hours, :total_minutes, :total_seconds

  def validate?(time) 
      time =~ CHECK_TIME_REGEX
  end

  def parse_and_calculate_total_units(*time)
    @total_minutes, @total_seconds, @total_hours = 0, 0, 0
    time.each do |time|
      if validate?(time)
        time = DateTime.parse(time)
        @total_hours += time.hour 
        @total_minutes += time.minute 
        @total_seconds += time.second
      else
      'Invalid Time'
      end
    end
  end

  def sum(*time)
    parse_and_calculate_total_units(*time)
    extra_minutes, seconds = total_seconds.divmod(60)
    @total_minutes += extra_minutes
    extra_hours, minutes = total_minutes.divmod(60)
    @total_hours += extra_hours
    days, hours = total_hours.divmod(24)
    "The total time is #{ days } day and #{ hours }:#{ minutes }:#{ seconds }"
  end

end
