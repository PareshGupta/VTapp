require 'date'

class Time
  CHECK_TIME_REGEX = /(^([0-1]?\d|2[0-3]?)\:([0-5]?\d)\:([0-5]?\d)$)/

  def validate?(time)
    CHECK_TIME_REGEX === time
  end

  def parse(time_array)
    @total_seconds, @total_minutes, @total_hours = 0, 0, 0
    time_array.all? do |time|
      if validate?(time)
        time = DateTime.parse(time)
        sum_total_each_unit(time)
      else
        'Invalid Time'
      end
      puts calculate_total
    end
  end

  def sum_total_each_unit(time)
      @total_hours += time.hour
      @total_minutes += time.minute
      @total_seconds += time.second
  end

  def calculate_total
    extra_minutes, @seconds = @total_seconds.divmod(60)
    @total_minutes += extra_minutes
    extra_hours, @minutes = @total_minutes.divmod(60)
    @total_hours += extra_hours
    @days, @hours = @total_hours.divmod(24)
    "The total time is #{ @days } day and #{ @hours }:#{ @minutes }:#{ @seconds }"
  end

end
